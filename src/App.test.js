import { render, screen } from '@testing-library/react';
import Card from './components/Cards/Cards';


test('renders button', () => {
  render(<Card />);
  const ButtonSelect = screen.getByText('Select');
  const ButtonDeselect = screen.getByText('Deselect');

  expect(ButtonSelect).toBeInTheDocument();
  expect(ButtonDeselect).toBeInTheDocument();
});


test('renders Placholder', () => {
  render(<Card />);
  const ButtonSelect = screen.getByText('Select');
  const ButtonDeselect = screen.getByText('Deselect');

  expect(ButtonSelect).toBeInTheDocument();
  expect(ButtonDeselect).toBeInTheDocument();
});