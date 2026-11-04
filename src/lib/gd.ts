/** Heading → HTML with every sentence-ending period in the brand green (Figma), plus a final period when none. */
export const gd = (t: string): string => {
  const e = t.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  return e.replace(/\.(\s|$)/g, '<i>.</i>$1') + (/[.?!]$/.test(t.trim()) ? '' : '<i>.</i>');
};
