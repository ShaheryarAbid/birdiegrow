// Parameters for the Figma "Shape-based particles" effect, copied from the design.
const base = {
  backgroundColor: { r: 0, g: 0, b: 0, a: 1 },
  dotDensity: 60, mouseSpring: 46, particleBlend: 'Normal', mouseDamping: 43, particleSoftness: 15,
  arrangement: 'Grid', mouseRadius: 271, threshold: 8, dotScale: 50, mode: 0, mouseScale: 359, sourceMix: 100, mouseStrength: 73,
};
/** Dark cards (hero, glance, process, features, price, setup icon). */
export const SHADER_DARK = JSON.stringify({
  ...base, mouseShape: 'Plateau', mouseZOffset: 38,
  particleGradient: { stops: [
    { position: 0, color: { r: 0.11238376796245575, g: 0.5975247621536255, b: 0.29096338152885437, a: 1 } },
    { position: 1, color: { r: 0.13333334028720856, g: 0.772549033164978, b: 0.3686274588108063, a: 1 } },
  ] },
});
/** Light variant (CTA / decorative balls). */
export const SHADER_LIGHT = JSON.stringify({
  ...base, mouseShape: 'Dome', mouseZOffset: 286,
  particleGradient: { stops: [
    { position: 0, color: { r: 0.8176, g: 1, b: 0.885, a: 1 } },
    { position: 1, color: { r: 0.13333334028720856, g: 0.772549033164978, b: 0.3686274588108063, a: 1 } },
  ] },
});
