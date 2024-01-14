// ClassForm.js
import React, { useState } from 'react';
import './ClassForm.css'

const ClassForm = ({ addClass }) => {
  const [className, setClassName] = useState('');
  const [totalTime, setTotalTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClass = {
      name: className,
      totalTime: totalTime,
    };
    addClass(newClass);
    setClassName('');
    setTotalTime('');
  };

  return (
    <form data-testid="class-form" onSubmit={handleSubmit}>
      <label>
        Class Name:
        <input type="text" value={className} onChange={(e) => setClassName(e.target.value)} />
      </label>
      <label>
        Total Time:
        <input type="text" value={totalTime} onChange={(e) => setTotalTime(e.target.value)} />
      </label>
      <button type="submit">Add Class</button>
    </form>
  );
};

export default ClassForm;
