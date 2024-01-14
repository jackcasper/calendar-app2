// src/components/SignIn.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignIn from './SignIn';

test('renders Sign In component', () => {
  render(<SignIn />);
  const signInElement = screen.getByText(/Sign In/i);
  expect(signInElement).toBeInTheDocument();
});

test('fires sign-in function on button click', () => {
  const mockSignIn = jest.fn();
  render(<SignIn signInWithEmailAndPassword={mockSignIn} />);

  fireEvent.click(screen.getByText(/Sign In/i));
  expect(mockSignIn).toHaveBeenCalledTimes(1);
});
