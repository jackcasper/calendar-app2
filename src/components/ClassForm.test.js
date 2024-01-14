// ClassForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ClassForm from './ClassForm';

test('renders ClassForm component', () => {
  render(<ClassForm />);
  const classFormElement = screen.getByTestId('class-form');
  expect(classFormElement).toBeInTheDocument();
});

test('allows user to add a class', () => {
  const mockAddClass = jest.fn();
  render(<ClassForm addClass={mockAddClass} />);
  
  // Simulate user input
  fireEvent.change(screen.getByLabelText(/Class Name/i), { target: { value: 'Math' } });
  fireEvent.change(screen.getByLabelText(/Total Time/i), { target: { value: '2 hours' } });

  // Simulate form submission
  fireEvent.click(screen.getByText(/Add Class/i));

  // Check if addClass function was called with the correct parameters
  expect(mockAddClass).toHaveBeenCalledWith({
    name: 'Math',
    totalTime: '2 hours',
  });
});
