import React from 'react';
// import './MonthlyCalendar.css'; // Import or define your CSS file

export const MonthlyCalendar = ({ month, markedDays, absentDays, holidays }) => {
  const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay();

  const renderCalendar = () => {
    const calendar = [];
    let dayCount = 1;

    // Create rows
    for (let i = 0; i < 6; i++) {
      const row = [];
      // Create columns
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDayOfMonth) || dayCount > daysInMonth) {
          row.push(<td key={`${i}-${j}`}></td>);
        } else {
          const isPresent = markedDays && markedDays.includes(dayCount);
          const isAbsent = absentDays && absentDays.includes(dayCount);
          const isHoliday = holidays && holidays.includes(dayCount);

          let className = '';
          if (isPresent) {
            className = 'bg-green-400';
          } else if (isAbsent) {
            className = 'bg-red-300';
          } else if (isHoliday) {
            className = 'bg-blue-100';
          }

          row.push(
            <td key={`${i}-${j}`} className={className}>
              {dayCount}
            </td>
          );
          dayCount++;
        }
      }
      calendar.push(<tr key={i}>{row}</tr>);
    }

    return calendar;
  };

  return (
    <div>
      {/* <h2>{month} Calendar</h2> */}
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>{renderCalendar()}</tbody>
      </table>
    </div>
  );
};
