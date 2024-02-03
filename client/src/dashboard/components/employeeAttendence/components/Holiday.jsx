import React, { useState } from 'react';
import HolidayForm from './HolidayForm';

export const Holiday = () => {
  const [markedHolidays, setMarkedHolidays] = useState([]);

  const handleHolidayMarked = (holiday) => {
    setMarkedHolidays([...markedHolidays, holiday]);
  };

  return (
    <div>
      <HolidayForm onHolidayMarked={handleHolidayMarked} />
      {/* Display marked holidays */}
      <h2>Marked Holidays:</h2>
      <ul>
        {markedHolidays.map((holiday) => (
          <li key={holiday._id}>
            Date: {holiday.date}, Description: {holiday.description}
          </li>
        ))}
      </ul>
    </div>
  );
};


