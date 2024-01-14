// CalendarSummary.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CalendarSummary from './CalendarSummary';

test('renders CalendarSummary component', () => {
  const mockClasses = [
    { id: 1, name: 'Class 1', totalTime: '3 hours' },
    { id: 2, name: 'Class 2', totalTime: '2 hours' },
    // Add more mock classes as needed
  ];
  render(<CalendarSummary classes={mockClasses} />);
  const calendarSummaryElement = screen.getByTestId('calendar-summary');
  expect(calendarSummaryElement).toBeInTheDocument();
});

test('renders class information', () => {
  const mockClasses = [
    { id: 1, name: 'Class 1', totalTime: '3 hours' },
    { id: 2, name: 'Class 2', totalTime: '2 hours' },
    // Add more mock classes as needed
  ];
  render(<CalendarSummary classes={mockClasses} />);
  const class1 = screen.getByText(/Class 1 - 3 hours/i);
  const class2 = screen.getByText(/Class 2 - 2 hours/i);
  expect(class1).toBeInTheDocument();
  expect(class2).toBeInTheDocument();
});
