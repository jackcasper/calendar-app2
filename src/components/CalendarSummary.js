// CalendarSummary.js
import React from 'react';
import './CalendarSummary.css'

const CalendarSummary = ({ classes }) => {
  return (
    <div data-testid="calendar-summary">
      <h2>Calendar Summary</h2>
      <ul>
        {classes.map((classItem) => (
          <li key={classItem.id}>
            {classItem.name} - {classItem.totalTime} hours
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarSummary;
