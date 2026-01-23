/**
 * Check if the value is defined.
 * @param {*} val - Value to check
 * @return {boolean}
 * @example
 * import { isDefined } from '@ircam/sc-utils';
 * isDefined(42); // true
 * isDefined(undefined); // false
 * isDefined(); // false
 * isDefined(null); // true
 * isDefined(NaN); // true
 * isDefined(0); // true
 */
export function isDefined(val) {
  return typeof val !== 'undefined';
}
