import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Number of users/i);
  expect(linkElement).toBeInTheDocument();
});
