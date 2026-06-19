/**
 * Perform a linear regression on a list of [x, y] tuples.
 *
 * Throws if values length < 2
 *
 * @param {Array.<Array.<number>>} values - List of [x, y] tuples
 * @return {number} - Slope
 * @throws - Throws if `values.length < 2` or if an elements of the list is not a [x, y] tuple of finite numbers
 * @example
 * import { frequencyToMidi } from '@ircam/sc-utils';
 * const freq = frequencyToMidi(440);
 * // > 69
 */
export function linearRegression(values: Array<Array<number>>): number;
//# sourceMappingURL=linear-regression.d.ts.map