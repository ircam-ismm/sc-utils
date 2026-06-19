/**
 * Perform a simple linear regression on a list of [x, y] tuples.
 *
 * @param {Array.<Array.<number>>} values - List of [x, y] tuples
 * @return {object} - An object containing the `slope` and `offset`
 * @throws {Error}- if `values.length < 2` or if any elements of the list is
 *  not a [x, y] tuple of finite numbers
 * @example
 * import { linearRegression } from '@ircam/sc-utils';
 * const slope = linearRegression([[0, 1], [1, 2]]);
 * // > { slope: 1, offset: 1 }
 */
export function linearRegression(values: Array<Array<number>>): object;
//# sourceMappingURL=linear-regression.d.ts.map