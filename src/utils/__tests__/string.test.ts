import { capitalize } from '../string';

describe('Util string', () => {
  describe('capitalize()', () => {
    it('makes a string capitalized', () => {
      let capitalized = capitalize('hello');
      expect(capitalized).toBe('Hello');

      capitalized = capitalize('123');
      expect(capitalized).toBe('123');

      capitalized = capitalize('Capitalize');
      expect(capitalized).toBe('Capitalize');
    });
  });
});
