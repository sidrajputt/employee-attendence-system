// AttendanceReport.js
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { MonthlyCalendar } from "./MonthlyCalender";
export const AttendanceReport = ({employee, setVeiwReport}) => {
  const [attendanceReport, setAttendanceReport] = useState({});

 

  useEffect(() => {
    const fetchAttendanceReport = async (employee) => {
      const data = {
        employeeId: employee?._id,
      };
      try {
        const response = await axios.post(
          `http://13.201.2.25:8000/api/attendance/attendance-report`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
            Credential: "include",
          }
        );
        setAttendanceReport(response?.data?.data);
        // console.log(updatedUserData);
        console.log(response?.data?.data);
        toast.success(response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          closeButton: true,
        });
        return response.data;
      } catch (error) {
        toast.error(error.message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          closeButton: true,
        });
      }
    };
    fetchAttendanceReport(employee);
  }, [employee]);

  if (!attendanceReport) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white w-full  p-5 rounded-xl shadow-xl">
      <div
        key={employee?._id}
        className=" bg-green-50 rounded-md shadow-md mb-5 flex  justify-between"
      >
        <div className="md:flex  space-x-5 p-5 ">
          <div className="w-40 font-semibold text-blue-500">
            {employee.firstName} {employee.lastName}
          </div>
          <div className="w-32 ">Emp. ID: {employee.employeeId}</div>
          <div className="w-56">Email: {employee.email}</div>
          <div className="w-40">Phone: {employee.phone}</div>
        </div>

      </div>
      <div className=" flex justify-between">
      
      <h2 className="text-xl font-bold text-blue-600 pb-5">
        Attendance Report
      </h2>
      <button onClick={()=>setVeiwReport(false)} className=" text-red-500 text-sm font-semibold">Close</button>
      </div>
      <div className="text-md font-semibold  text-black pb-5">
        <h3>
          Total Working Days:{" "}
          {attendanceReport?.totalWorkingDaysExcludingHolidays}
        </h3>
        <h3>Total Present Days: {attendanceReport?.totalPresent?.length}</h3>
        <h3>Total Absent Days: {attendanceReport?.totalAbsent?.length}</h3>
        <h3>Total Holidays: {attendanceReport?.totalHolidays?.length}</h3>
      </div>
      <div>
        <h3 className="text-md ">Employee Attendence</h3>
        <MonthlyCalendar
          markedDays={attendanceReport?.totalPresent?.map((presentDay) => {
            const date = new Date(presentDay?.date);
            return date.getDate();
          })}
          absentDays={attendanceReport?.totalAbsent?.map((absentDayDay) => {
            const date = new Date(absentDayDay?.date);
            return date.getDate();
          })}
          holidays={attendanceReport?.totalHolidays?.map((holiday) => {
            const date = new Date(holiday?.date);
            return date.getDate();
          })}
        />
        Total Present Day
        <MonthlyCalendar
          markedDays={attendanceReport?.totalPresent?.map((presentDay) => {
            const date = new Date(presentDay?.date);
            return date.getDate();
          })}
        />
        Total Absent Day
        <MonthlyCalendar
          absentDays={attendanceReport?.totalAbsent?.map((absentDayDay) => {
            const date = new Date(absentDayDay?.date);
            return date.getDate();
          })}
        />
        Total holiday Day
        <MonthlyCalendar
          holidays={attendanceReport?.totalHolidays?.map((holiday) => {
            const date = new Date(holiday?.date);
            return date.getDate();
          })}
        />
      </div>
    </div>
  );
};
