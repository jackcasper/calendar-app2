// src/components/SignOut.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignOut from './SignOut';

test('renders Sign Out component', () => {
  render(<SignOut />);
  const signOutElement = screen.getByText(/Sign Out/i);
  expect(signOutElement).toBeInTheDocument();
});

test('fires sign-out function on button click', () => {
  const mockSignOut = jest.fn();
  render(<SignOut signOut={mockSignOut} />);

  fireEvent.click(screen.getByText(/Sign Out/i));
  expect(mockSignOut).toHaveBeenCalledTimes(1);
});
