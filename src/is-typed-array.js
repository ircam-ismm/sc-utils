/**
 * Check if the value is a TypedArray
 * @param {*} val - Value to check
 * @return {boolean}
 * @example
 * import { isTypedArray } from '@ircam/sc-utils';
 * isTypedArray(new Float32Array([1, 2, 3]));
 * // > true
 */
export function isTypedArray(arr) {
  return (
       arr instanceof Int8Array
    || arr instanceof Int16Array
    || arr instanceof Int32Array
    || arr instanceof Uint8Array
    || arr instanceof Uint8ClampedArray
    || arr instanceof Uint16Array
    || arr instanceof Uint32Array
    || arr instanceof Float32Array
    || arr instanceof Float64Array
  )
}
