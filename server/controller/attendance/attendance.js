const Attendance = require("../../models/attendance");
const Holiday = require("../../models/holiday");
const {
  addMonths,
  eachDayOfInterval,
} = require("date-fns");

const markAttendance = async (req, res) => {
  const { employeeId, date, status } = req.body;

  // Assuming you have a model with fields like employeeId, timestamp, status (present/absent/holiday)
  const attendanceRecord = new Attendance({
    employeeId,
    date: date || new Date(),
    status: status, // You can customize this based on your requirements
  });

  try {
    await attendanceRecord.save();
    res
      .status(200)
      .json({
        message: "Attendance marked successfully.",
        data: attendanceRecord,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const markHoliday = async (req, res) => {
  const { date, description } = req.body;
  console.log(date, description);
  const holidayRecord = new Holiday({
    date: date,
    description: description,
  });

  try {
    await holidayRecord.save();
    res
      .status(200)
      .json({ message: "Holiday marked successfully.", data: holidayRecord });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

async function getAllAttendanceRecords(employeeId) {
  try {
    const attendanceRecords = await Attendance.find({ employeeId });
    return attendanceRecords;
  } catch (error) {
    console.error(error);
    throw new Error("Error while fetching attendance records");
  }
}

const getAttendanceForEmployee = async (req, res) => {
  const { employeeId } = req.body;

  try {
    // Assuming you have an 'employeeId' field in your Attendance model
    const attendanceRecords = await Attendance.find({ employeeId : employeeId });
    res.status(200).json({ data:attendanceRecords, message:"Attendence fetch successfully", success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


const getAllHolidays = async (req, res) => {
  try {
    const allHolidays = await Holiday.find();
    res.status(200).json({ message: "All holiday data fetch successfully ", data: allHolidays, success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};




async function getAllHolidaysfun() {
  try {
    const holidayRecords = await Holiday.find();
    return holidayRecords;
  } catch (error) {
    console.error(error);
    throw new Error("Error while fetching holiday records");
  }
}

const attendanceReport = async (req, res) => {
  const { employeeId } = req.body;

  try {
    const allAttendanceRecords = await getAllAttendanceRecords(employeeId);
    const allHolidays = await getAllHolidaysfun();

    const currentDate = new Date();
    const currentMonthStart = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const nextMonthStart = addMonths(currentMonthStart, 1);

    const holidaysForCurrentMonth = allHolidays.filter(
      (holiday) =>
        holiday.date >= currentMonthStart && holiday.date < nextMonthStart
    );

    // Get all days of the current month
    const allDaysOfCurrentMonth = eachDayOfInterval({
      start: currentMonthStart,
      end: nextMonthStart,
    });
    // console.log('allDaysOfCurrentMonth:', allDaysOfCurrentMonth);
    // Filter out Sundays and Saturdays
    const workingDays = allDaysOfCurrentMonth.slice(1).filter((record) => {
      const dayOfWeek = record.getDay();
      return dayOfWeek !== 6 && dayOfWeek !== 0; //  6 is Saturday , 0 is sunday,
    });

    // console.log('workingDays:', workingDays);

    const attendanceRecordsForCurrentMonth = allAttendanceRecords.filter(
      (record) =>
        record.date >= currentMonthStart && record.date < nextMonthStart
    );
    //   console.log('Attendance Records for Current Month:', attendanceRecordsForCurrentMonth);

    // Calculate total present, absent, holiday, and working days
    const totalWorkingDays = workingDays;
    // console.log('Total Working Days:', workingDays)
    const totalPresent = attendanceRecordsForCurrentMonth.filter(
      (record) => record.status === "present"
    );
    // console.log('totalPresent:', attendanceRecordsForCurrentMonth.filter(
    //     (record) => record.status === "present"
    //   ))
    const totalAbsent = attendanceRecordsForCurrentMonth.filter(
      (record) => record.status === "absent"
    );
    // console.log('totalAbsent:', attendanceRecordsForCurrentMonth.filter(
    //     (record) => record.status === "absent"
    //   ))
    const totalHolidays = holidaysForCurrentMonth;
// console.log("totalHolidays : ",holidaysForCurrentMonth)
    const totalWorkingDaysExcludingHolidays = totalWorkingDays.length - totalHolidays.length;

    // Return the generated report
    res.status(200).json({
        data :{
            totalWorkingDays,
            totalPresent,
            totalAbsent,
            totalHolidays,
            totalWorkingDaysExcludingHolidays
        },
        message: "Attendance report generated successfully.",
        success: true,

    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { markAttendance, markHoliday, attendanceReport, getAllHolidays, getAttendanceForEmployee};
