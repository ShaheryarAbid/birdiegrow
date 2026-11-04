// Vanilla port of the Figma shader runtime (ShaderEffect + useShaderRuntime + webgpu).
// Logic mirrors the React runtime; the effect module (effect.js) is used verbatim.
import * as effect from './effect';

const DEFAULT_MANIFEST = { version: 2, isAnimated: false, usesMouse: false, name: '' };
let devicePromise = null;
function acquireDevice() {
  if (!devicePromise) {
    devicePromise = (async () => {
      const gpu = navigator.gpu;
      if (!gpu) throw new Error('WebGPU unsupported.');
      const adapter = await gpu.requestAdapter();
      if (!adapter) throw new Error('Failed to get WebGPU adapter.');
      return adapter.requestDevice();
    })();
    devicePromise.catch(() => { devicePromise = null; });
  }
  return devicePromise;
}

function copyElementImageToInputTexture(content, runtime) {
  const queue = runtime.gpu.device.queue;
  const input = runtime.input;
  if (queue.drawElementImageToTexture) {
    try {
      queue.drawElementImageToTexture({ source: content }, { texture: input, size: { width: input.width, height: input.height } });
      return;
    } catch (e) { if (!queue.copyElementImageToTexture) throw e; }
  }
  if (!queue.copyElementImageToTexture) throw new Error('HTML-in-Canvas is not supported.');
  try {
    queue.copyElementImageToTexture({ source: content }, { destination: { texture: input }, width: input.width, height: input.height });
  } catch {
    queue.copyElementImageToTexture(content, input.width, input.height, { texture: input });
  }
}

class Runtime {
  constructor(gpu, input, shaders) {
    this.gpu = gpu; this.input = input; this.output = null;
    this.shaders = shaders; this.shaderData = shaders.map((s) => ({ shader: s, state: {} }));
    this.intermediate = [];
    this.time = 0; this.delta = 0; this.frame = 0;
    this.mouse = { x: 0, y: 0, down: false };
    const m = (s) => s.manifest ?? DEFAULT_MANIFEST;
    this.isAnimated = shaders.some((s) => m(s).isAnimated);
    this.usesMouse = shaders.some((s) => m(s).usesMouse);
  }
  state(i) {
    return {
      gpu: this.gpu,
      input: i === 0 ? this.input : this.intermediate[i % 2],
      output: i === this.shaderData.length - 1 ? this.output : this.intermediate[(i + 1) % 2],
      time: this.time, deltaTime: this.delta, frame: this.frame,
      mousePosition: this.mouse, renderScale: window.devicePixelRatio || 1,
      params: this.shaderData[i].shader.params, state: this.shaderData[i].state,
    };
  }
  makeTex(input) {
    return this.gpu.device.createTexture({ size: [input.width, input.height, 1], format: this.gpu.format, usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.RENDER_ATTACHMENT });
  }
  updateIntermediate() {
    if (!this.input) return;
    const { width, height } = this.input;
    if (this.intermediate[0]?.width === width && this.intermediate[0]?.height === height) return;
    this.intermediate.forEach((t) => t.destroy());
    this.intermediate = [this.makeTex(this.input), this.makeTex(this.input)];
  }
}

async function mount(host) {
  const params = JSON.parse(host.getAttribute('data-shader-params') || '{}');
  const children = Array.from(host.childNodes);
  const hasChildren = children.length > 0;
  let device;
  try { device = await acquireDevice(); } catch (e) { return; }
  if (!hasChildren || !('drawElementImageToTexture' in device.queue || 'copyElementImageToTexture' in device.queue)) return;

  const canvas = document.createElement('canvas');
  canvas.className = 'bd-shader-canvas';
  canvas.setAttribute('layoutsubtree', '');
  canvas.setAttribute('content', 'drawable');
  canvas.style.display = 'block';
  const content = document.createElement('div');
  content.setAttribute('drawable', '');
  content.style.cssText = 'position:relative;width:100%;height:100%';
  children.forEach((c) => content.appendChild(c));
  canvas.appendChild(content);
  host.appendChild(canvas);

  const fail = (e) => {
    console.warn('Shader fallback', e);
    canvas.remove();
    children.forEach((c) => host.appendChild(c));
  };

  let runtime, input, raf = null, last = null, dirty = true, ready = false;
  let inView = true;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  try {
    const context = canvas.getContext('webgpu');
    if (!context) throw new Error('Failed to get WebGPU context.');
    const format = 'rgba8unorm';
    context.configure({ device, format, alphaMode: 'premultiplied' });
    const rect = canvas.getBoundingClientRect();
    const scale = window.devicePixelRatio || 1;
    canvas.width = Math.max(Math.round(rect.width * scale), 1);
    canvas.height = Math.max(Math.round(rect.height * scale), 1);
    const mkInput = () => device.createTexture({ size: [canvas.width, canvas.height, 1], format, usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT });
    input = mkInput();
    const shader = { setup: effect.setup, render: effect.render, params, manifest: effect.manifest };
    runtime = new Runtime({ device, context, format }, input, [shader]);
    runtime.updateIntermediate();
    runtime.shaders.forEach((s, i) => s.setup(device, runtime.state(i)));
    ready = true;

    const stop = () => { if (raf != null) cancelAnimationFrame(raf); raf = null; last = null; };
    const schedule = () => canvas.requestPaint();
    const start = () => {
      if (raf != null || !inView || document.hidden || motion.matches) return;
      const tick = (ts) => {
        raf = requestAnimationFrame(tick);
        runtime.delta = last == null ? 0 : ts - last; last = ts;
        runtime.time += runtime.delta; runtime.frame += 1;
        schedule();
      };
      raf = requestAnimationFrame(tick);
    };
    const renderCore = () => {
      if (!ready) return;
      try {
        if (dirty) { copyElementImageToInputTexture(content, runtime); dirty = false; }
        runtime.updateIntermediate();
        runtime.output = runtime.gpu.context.getCurrentTexture();
        runtime.shaders.forEach((s, i) => s.render(device, runtime.state(i)));
      } catch (e) { console.warn('Failed to render effect', e); return; }
      runtime.isAnimated ? start() : stop();
    };
    canvas.onpaint = (ev) => { if (ev.changedElements.length > 0) dirty = true; renderCore(); };
    new IntersectionObserver((entries) => {
      inView = entries.some((entry) => entry.isIntersecting);
      if (inView) { schedule(); start(); } else stop();
    }).observe(host);
    const syncActivity = () => {
      if (document.hidden || motion.matches) stop();
      else if (inView) { schedule(); start(); }
    };
    document.addEventListener('visibilitychange', syncActivity);
    motion.addEventListener('change', syncActivity);

    new ResizeObserver((entries) => {
      for (const en of entries) {
        const s = en.contentBoxSize?.[0];
        canvas.width = Math.max(Math.round((s?.inlineSize ?? en.contentRect.width) * scale), 1);
        canvas.height = Math.max(Math.round((s?.blockSize ?? en.contentRect.height) * scale), 1);
      }
      runtime.input?.destroy();
      runtime.input = mkInput(); dirty = true; runtime.updateIntermediate();
      schedule();
    }).observe(canvas, { box: 'device-pixel-content-box' });

    const sync = (e) => {
      const r = canvas.getBoundingClientRect();
      if (!r.width || !r.height) return;
      runtime.mouse.x = ((e.clientX - r.left) * canvas.width) / r.width;
      runtime.mouse.y = ((e.clientY - r.top) * canvas.height) / r.height;
    };
    const repaint = () => { if (raf == null) schedule(); };
    if (runtime.usesMouse) {
      window.addEventListener('pointermove', (e) => { sync(e); repaint(); }, { passive: true });
      window.addEventListener('pointerdown', (e) => { if (e.button !== 0) return; runtime.mouse.down = true; sync(e); repaint(); }, { passive: true });
      const up = () => { if (runtime.mouse.down) { runtime.mouse.down = false; repaint(); } };
      window.addEventListener('pointerup', up, { passive: true });
      window.addEventListener('pointercancel', up, { passive: true });
    }
    schedule();
  } catch (e) { fail(e); }
}

export function initShaders(root = document) {
  if (typeof navigator === 'undefined' || !navigator.gpu || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  root.querySelectorAll('[data-shader-params]').forEach((h) => {
    if (h.dataset.shaderMounted) return;
    h.dataset.shaderMounted = '1';
    // lazy-mount when near the viewport
    const io = new IntersectionObserver((es) => {
      if (es.some((x) => x.isIntersecting)) { io.disconnect(); mount(h); }
    }, { rootMargin: '200px' });
    io.observe(h);
  });
}
