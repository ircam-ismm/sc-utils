/**
 * Check if the value is a function
 * @param {*} val - Value to check
 * @return {boolean}
 * @example
 * import { isFunction } from '@ircam/sc-utils';
 * isFunction(() => {}));
 * // > true
 */
export function isFunction(func) {
  return Object.prototype.toString.call(func) == '[object Function]' ||
    Object.prototype.toString.call(func) == '[object AsyncFunction]';
}

