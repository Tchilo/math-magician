import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from '../components/calculator';

describe('Calculator tests', () => {
  afterEach(() => {
    cleanup();
  });

  test('Calculator page render', () => {
    render(<Calculator />);
    const acBtn = screen.getByText('AC');
    expect(acBtn).toBeInTheDocument();
  });

  test('Calculator calculations', () => {
    render(<Calculator />);
    const displayScreen = screen.getByTestId('calculator-display');
    expect(displayScreen.firstChild.textContent).toEqual('0');
  });

  test('performs addition when = is called', () => {
    const obj = {
      total: '3',
      next: '2',
      operation: '+',
    };
    const buttonName = '=';
    expect(calculate(obj, buttonName).total).toBe('5');
  });
});
