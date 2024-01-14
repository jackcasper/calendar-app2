// Calendar.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calendar from './Calendar';

test('renders Calendar component', () => {
  const mockCalendar = [
    { id: 1, title: 'Event 1', date: '2022-01-01' },
    { id: 2, title: 'Event 2', date: '2022-01-02' },
    // Add more mock calendar events as needed
  ];
  render(<Calendar calendar={mockCalendar} />);
  const calendarElement = screen.getByTestId('calendar');
  expect(calendarElement).toBeInTheDocument();
});

test('renders calendar events', () => {
  const mockCalendar = [
    { id: 1, title: 'Event 1', date: '2022-01-01' },
    { id: 2, title: 'Event 2', date: '2022-01-02' },
    // Add more mock calendar events as needed
  ];
  render(<Calendar calendar={mockCalendar} />);
  const event1 = screen.getByText(/Event 1/i);
  const event2 = screen.getByText(/Event 2/i);
  expect(event1).toBeInTheDocument();
  expect(event2).toBeInTheDocument();
});
