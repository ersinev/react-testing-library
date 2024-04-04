import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders ersin', () => {
  render(<App/>)
  const ersinLink = screen.getAllByText("ersin")
  ersinLink.forEach((link) => {
    expect(link).toBeInTheDocument()
  })
})