import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
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
});
