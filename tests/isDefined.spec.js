import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import {
  isDefined,
} from '@ircam/sc-utils/is-defined.js';

describe('isDefined', () => {

  it('should produce correct results', () => {
    assert(isDefined(42) === true, `isDefined(42) should be true`);
    assert(isDefined(undefined) === false, `isDefined(undefined) should be false`);
    assert(isDefined() === false, `isDefined() should be false`);
    assert(isDefined(null) === true, `isDefined(null) should be true`);
    assert(isDefined(NaN) === true, `isDefined(NaN) should be true`);
    assert(isDefined(0) === true, `isDefined(0) should be true`);
  }); // isDefined
}); // isDefined
