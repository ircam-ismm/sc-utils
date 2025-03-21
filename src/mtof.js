import { midiToFrequency } from './midi-to-frequency.js';
/**
 * Convert a MIDI note to frequency
 *
 * _Alias:_ `midiToFrequency`
 *
 * @param {number} midiNote - MIDI Note to convert
 * @return {number}
 * @example
 * import { mtof } from '@ircam/sc-utils';
 * const freq = mtof(69);
 * // > 440
 */
export function mtof(midiNote) {
  return midiToFrequency(midiNote);
}
