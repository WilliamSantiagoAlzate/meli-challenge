import { currencyFormatter } from '../../helpers/currencyFormatter';

describe('currencyFormatter', () => {
  const currency: number = 1000;
  test('Return a number with currency format', () => {
    expect(currencyFormatter(currency)).toEqual('$1,000');
  });
});