// Calendar.js
import React from 'react';
import './Calendar.css';

const Calendar = ({ calendar }) => {
  const [shareLink, setShareLink] = React.useState('');

  const generateShareLink = () => {
    const calendarData = JSON.stringify(calendar);
    const link = `https://example.com/share?data=${encodeURIComponent(calendarData)}`;
    setShareLink(link);
  };

  return (
    <div data-testid="calendar" className="calendar-container">
      {/* Display your calendar grid here */}
          <div className="day">Monday</div>
          <div className="day">Tuesday</div>
          <div className="day">Wednesday</div>
          <div className="day">Thursday</div>
          <div className="day">Friday</div>
          <div className="day">Saturday</div>
          <div className="day">Sunday</div>
      {/* ... more days */}
      
      {/* Example: Display events */}
      {calendar.map(event => (
        <div key={event.id} className="event">
          {event.title}
        </div>
      ))}

      {/* Button to generate and display the shareable link */}
      <button onClick={generateShareLink}>Generate Share Link</button>
      {shareLink && (
        <div>
          <p>Share this link: {shareLink}</p>
        </div>
      )}
    </div>
  );
};

export default Calendar;
