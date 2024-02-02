import React from 'react'

export const MonthlyCalendar = ({ month, markedDays }) => {
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
          const isMarked = markedDays && markedDays?.includes(dayCount);
          row.push(
            <td key={`${i}-${j}`} className={isMarked ? 'marked-day' : ''}>
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
      <h2>{month} Calendar</h2>
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