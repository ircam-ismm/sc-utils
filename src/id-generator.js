/**
 * Create a iterator of incrementing ids
 * @return {Iterator}
 * @example
 * import { idGenerator } from '@ircam/sc-utils';
 * const generator = idGenerator();
 * const id = generator.next().value
 */
export function* idGenerator() {
  for (let i = 0; true; i++) {
    if (i === Number.MAX_SAFE_INTEGER) {
      i = 0;
    }

    yield i;
  }
}

