import '@testing-library/jest-dom/extend-expect';
import operate from '../logic/operate';

describe('Test Operate function', () => {
  test('multiplication', () => {
    const result = operate('4', '2', 'x');
    expect(result).toBe('8');
  });
  test('Adition', () => {
    const result = operate('4', '2', '+');
    expect(result).toBe('6');
  });
  test('Subtraction', () => {
    const result = operate('4', '2', '-');
    expect(result).toBe('2');
  });
  test('Division', () => {
    const result = operate('8', '2', '%');
    expect(result).toBe('0');
  });
  test('multiplication', () => {
    const result = operate('4', '2', '÷');
    expect(result).toBe('2');
  });
});
