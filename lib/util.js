// Deterministic PRNG so server and client render the same particles.
export function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const POWDER = ["#e3121a", "#1fa34a", "#f2b705", "#1e9bd7", "#0b2a8f", "#f0641a", "#e3121a", "#1fa34a", "#9aa0a8"];

