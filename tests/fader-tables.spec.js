import { assert } from 'chai';
import { valueToPosition, positionToValue } from '../src/fader-tables.js';

const transfertTable = [0, 0.25, 1];

describe('# fader-tables', () => {
  describe('valueToPosition(value, transfertTable)', () => {
    it(`should work`, () => {
      {
        const res = valueToPosition(0, transfertTable);
        assert.equal(res, 0);
      }

      {
        const res = valueToPosition(1, transfertTable);
        assert.equal(res, 1);
      }

      {
        const res = valueToPosition(0.25, transfertTable);
        assert.equal(res, 0.5);
      }

      {
        const res = valueToPosition(0.125, transfertTable);
        assert.equal(res, 0.25);
      }

      {
        const res = valueToPosition(0.625, transfertTable);
        assert.equal(res, 0.75);
      }
    });

    it(`should clamp to table boundaries`, () => {
      {
        const res = valueToPosition(-1, transfertTable);
        assert.equal(res, 0);
      }

      {
        const res = valueToPosition(2, transfertTable);
        assert.equal(res, 1);
      }
    });
  });

  describe('positionToValue(value, transfertTable)', () => {
    it(`should work`, () => {
      {
        const res = positionToValue(0, transfertTable);
        assert.equal(res, 0);
      }

      {
        const res = positionToValue(1, transfertTable);
        assert.equal(res, 1);
      }

      {
        const res = positionToValue(0.5, transfertTable);
        assert.equal(res, 0.25);
      }

      {
        const res = positionToValue(0.25, transfertTable);
        assert.equal(res, 0.125);
      }

      {
        const res = positionToValue(0.75, transfertTable);
        assert.equal(res, 0.625);
      }
    });

    it(`should clamp to table boundaries`, () => {
      {
        const res = positionToValue(-1, transfertTable);
        assert.equal(res, 0);
      }

      {
        const res = positionToValue(2, transfertTable);
        assert.equal(res, 1);
      }
    });
  });
});
