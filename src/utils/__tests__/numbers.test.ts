import { formatNumberAsQuantity } from '../numbers';

describe('Util numbers', () => {
  describe('formatNumberAsQuantity()', () => {
    it('formats numbers correctly', () => {
      let formattedNumber = formatNumberAsQuantity(100);
      expect(formattedNumber).toBe('100.00');

      formattedNumber = formatNumberAsQuantity(1000);
      expect(formattedNumber).toBe('1,000.00');

      formattedNumber = formatNumberAsQuantity(765.4356);
      expect(formattedNumber).toBe('765.44');
    });
  });
});
