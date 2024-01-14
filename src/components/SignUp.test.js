// src/components/SignUp.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignUp from './SignUp';

test('renders Sign Up component', () => {
  render(<SignUp />);
  const signUpElement = screen.getByText(/Sign Up/i);
  expect(signUpElement).toBeInTheDocument();
});

test('fires sign-up function on button click', () => {
  const mockSignUp = jest.fn();
  render(<SignUp signUpWithEmailAndPassword={mockSignUp} />);

  fireEvent.click(screen.getByText(/Sign Up/i));
  expect(mockSignUp).toHaveBeenCalledTimes(1);
});
