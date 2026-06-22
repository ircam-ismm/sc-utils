import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import fc from 'fast-check';

import {
  linearRegression,
  almostEqual,
} from '@ircam/sc-utils';

describe('linearRegression(values) -> number', () => {
  it('should throw if values.length < 1', () => {
    assert.throws(() => {
      linearRegression([[0, 0]]);
    });
  });

  it('should throw if a tuple is invalid', () => {
    assert.throws(() => {
      linearRegression([[0, 0], [Infinity, 0]]);
    });
  });

  it('should throw if a tuple is invalid', () => {
    assert.throws(() => {
      linearRegression([[0, NaN], [1, 0]]);
    });
  });

  it('should return zero for horizontal line', () => {
    const values = [
      [0, 1],
      [1, 1],
      [2, 1],
    ]
    const result = linearRegression(values);
    assert.deepEqual(result, { slope: 0, offset: 1 });
  });

  it('should return Infinity for vertical line', () => {
    const values = [
      [1, 0],
      [1, 1],
      [1, 2],
    ]
    const result = linearRegression(values);
    assert.deepEqual(result, { slope: Infinity, offset: Infinity });
  });

  it('should work', () => {
    const values = [
      [-1, -1],
      [0, 0],
      [2, 2],
    ]
    const result = linearRegression(values);
    assert.deepEqual(result, { slope: 1, offset: 0 });
  });

  it('should work', () => {
    const values = [
      [0, 1],
      [1, 0],
      [3, -2],
    ]
    const result = linearRegression(values);
    assert.deepEqual(result, { slope: -1, offset: 1 });
  });

    it('should work', () => {
    const values = [
      [3, -2],
      [0, 1],
      [1, 0],
    ]
    const result = linearRegression(values);
    assert.deepEqual(result, { slope: -1, offset: 1 });
  });
});
