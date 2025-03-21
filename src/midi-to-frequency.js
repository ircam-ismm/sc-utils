/**
 * Convert a MIDI note to frequency
 * @param {number} midiNote - MIDI Note to convert
 * @return {number}
 * @example
 * import { midiToFrequency } from '@ircam/sc-utils';
 * const freq = midiToFrequency(69);
 * // > 440
 */
export function midiToFrequency(midiNote) {
  // https://www.music.mcgill.ca/~gary/307/week1/node28.html
  return 440 * Math.pow(2, (midiNote - 69) / 12);
}
