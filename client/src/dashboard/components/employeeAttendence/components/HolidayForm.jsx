// HolidayForm.js
import React, { useState } from 'react';

export const HolidayForm = () => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [showHoliday, setShowHoliday] = useState(false);
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleMarkHoliday = async () => {
    // Perform validation if needed

   
  };

  return (<>

<button
      className="bg-green-500 text-white w-36 px-3 py-2 mt-4 rounded-full  hover:bg-blue-600"
   onClick={()=>setShowHoliday(!showHoliday)}
    >
      Create Holiday
    </button>
{showHoliday ?   <div className="max-w-4xl w-[450px] absolute bg-green-100  mx-auto my-auto z-10 rounded-2xl overflow-hidden shadow-md p-6 m-4 mb-6">
      <div className='flex justify-between w-full '>
    <h2 className="text-2xl font-semibold mb-4">Mark Holiday</h2>
    <button
      className="bg-red-500 text-white h-8  px-3 py-1 rounded-md  hover:bg-red-600"
   onClick={()=>setShowHoliday(false)}
    >
      Close
    </button></div>
    <label className="block mb-2">
      <span className="text-gray-700">Date:</span>
      <input
        type="date"
        className="mt-1 p-2 border rounded w-full"
        value={date}
        onChange={handleDateChange}
      />
    </label>
    <label className="block mb-2">
      <span className="text-gray-700">Description:</span>
      <textarea
      rows={4}
        type="text"
        className="mt-1 p-2 border rounded w-full"
        value={description}
        onChange={handleDescriptionChange}
      ></textarea>
    </label>
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600"
      onClick={handleMarkHoliday}
    >
      Mark Holiday
    </button>
  </div> : null }
  
  </>
  );
};

