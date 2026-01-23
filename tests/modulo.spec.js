import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import fc from 'fast-check';

import {
  modulo,
} from '@ircam/sc-utils/modulo.js';

const epsilon = 1e-7;

describe('modulo', () => {

  it('should produce correct results', () => {

    // replace with replay option if needed
    const debugOptions = {};

    fc.assert(
      fc.asyncProperty(
        fc.record({
          value: fc.float({ noNaN: true, noDefaultInfinity:true }),
          modulus: fc.float({ noNaN: true, noDefaultInfinity:true })
            .filter(m => Math.abs(m) > epsilon),
          offset: fc.float({ noNaN: true, noDefaultInfinity:true }),
        }, { requiredKeys: ['value', 'modulus'] }),
        async ({ value, modulus, offset }) => {

          const result = modulo(value, modulus, offset);

          const offsetNormalised = offset ?? 0;

          // check result range
          if (modulus > 0) {
            assert(
              offsetNormalised <= result + epsilon && result - epsilon <= offsetNormalised + modulus,
              `modulo result out of range [offset, offset + modulus]: value: ${value}, modulus: ${modulus}, result: ${result}`,
            );
          } else {
            assert(
              offsetNormalised + modulus <= result + epsilon && result - epsilon <= offsetNormalised,
              `modulo result out of range [offset + modulus, offset]: value: ${value}, modulus: ${modulus}, result: ${result}`,
            );
          }

        }), {
        ...debugOptions,
      },
    );

  }); // floor
}); // modulo
