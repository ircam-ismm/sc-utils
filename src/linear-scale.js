/**
 * Create a scale function
 * @param {number} minIn - Minimum input
 * @param {number} maxIn - Maximum input
 * @param {number} minOut - Minimum output
 * @param {number} maxOut - Maximum output
 * @param {boolean} [clamp=false] - Clamp output
 * @return {Function}
 * @example
 * import { scale } from '@ircam/sc-utils';
 * const myScale = scale(0, 1, 50, 100);
 * myScale(0.5);
 * // > 75
 */
export function linearScale(minIn, maxIn, minOut, maxOut, clamp = false) {
  const a = (maxOut - minOut) / (maxIn - minIn);
  const b = minOut - a * minIn;
  if (!clamp) {
    return x => a * x + b;
  } else {
    const upperBound = Math.max(minOut, maxOut);
    const lowerBound = Math.min(minOut, maxOut);

    return x => {
      const y = a * x + b;
      return Math.max(lowerBound, Math.min(upperBound, y));
    };
  }
}
