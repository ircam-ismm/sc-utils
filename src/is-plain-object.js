import isPlainObj from 'is-plain-obj';

/**
 * Check if the value is a Plain Old Javascript Object (POJO)
 * @param {*} val - Value to check
 * @return {boolean}
 * @example
 * import { isObject } from '@ircam/sc-utils';
 * isObject({ a: 1 });
 * // > true
 */
export function isPlainObject(val) {
  return isPlainObj(val);
}
