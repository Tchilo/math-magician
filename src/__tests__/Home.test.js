import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Home from '../components/Home';

describe('testing homepage', () => {
  test('welcome text', () => {
    render(<Home />);
    const h1 = screen.getByTestId('welcome');
    expect(h1).toHaveTextContent('Welcome to my page!');
  });
  test('renders as expecte', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
