import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import fc from 'fast-check';

import { almostEqual, almostEqualArray } from '@ircam/sc-utils/almostEqual.js';

describe('almostEqual', () => {

  it('almostEqual on numbers', () => {

    // replace with replay option if needed
    const debugOptions = {};

    fc.assert(
      fc.property(
        fc.double({ noDefaultInfinity: true, noNaN: true }),
        fc.double({ min: 0, noDefaultInfinity: true, noNaN: true }),
        (value, tolerance) => {

          assert(almostEqual(value, value, tolerance),
            `Same value must be equal for any tolerance: value: ${value}, tolerance: ${tolerance}`,
          );

          // tolerance must sum all possible computation errors
          const range = Math.max(Math.abs(value), Math.abs(tolerance));

          assert(almostEqual(value, value + Math.sign(value) * tolerance, 2 * tolerance),
            `Absolute tolerance too strict: value: ${value}, tolerance: ${tolerance}, range: ${range}`,
          );

          assert(almostEqual(value, value * range, 2 * range),
            `Relative tolerance too strict: value: ${value}, tolerance: ${tolerance}, range: ${range}`,
          );

          const differentValue = Math.sign(value) * Math.max(
            Math.abs(value + Math.sign(value) * range),
            Math.abs(value * range),
          );
          if (value !== differentValue
            && Math.abs(differentValue) !== Infinity
          ) {
            assert(!almostEqual(value, differentValue, 0.5 * range),
              `Tolerance too relaxed: value: ${value}, tolerance: ${tolerance}, range: ${range}`,
            );
          }

        }), {
        ...debugOptions,
      });
  }); // almostEqual

  it('almostEqualArray on arrays of numbers', () => {

    const debugOptions = {};

    fc.assert(
      fc.property(
        fc.array(fc.double({ noDefaultInfinity: true, noNaN: true })),
        fc.double({ min: 0, noDefaultInfinity: true, noNaN: true }),
        (value, tolerance) => {

          // tolerance should sum all possible computation errors
          const range = Math.max(Math.abs(tolerance),
            value.reduce((max, v) => Math.max(max, Math.abs(v)), 0),
          );

          assert(almostEqualArray(value, value.map(v => v + Math.sign(v) * tolerance), 2 * tolerance),
            `Absolute tolerance too strict: value: ${value}, tolerance: ${tolerance}, range: ${range}`,
          );

          assert(almostEqualArray(value, value.map(v => v * range), 2 * range),
            `Relative tolerance too strict: value: ${value}, tolerance: ${tolerance}, range: ${range}`,
          );

          assert(!almostEqualArray(value, value.concat([0])),
            `Different size arrays should not be equal: value: ${value}, tolerance: ${tolerance}, range: ${range}`,
          );

          const differentValue = value.map(v => {
            const dv = Math.sign(v) * Math.max(
              Math.abs(v + Math.sign(v) * range),
              Math.abs(v * range),
            );
            return (dv === v || Math.abs(dv) === Infinity) ? v : dv;
          });

          if (differentValue.some((dv, i) => dv !== value[i])) {
            assert(!almostEqualArray(value, differentValue, 0.5 * range),
              `Tolerance too relaxed: value: ${value}, tolerance: ${tolerance}, range: ${range}`,
            );
          }


        }), {
        ...debugOptions,
      },
    );

  }); // almostEqual

}); // comparison

