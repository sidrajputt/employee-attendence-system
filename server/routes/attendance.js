const express = require('express')
const router = express.Router()
const { 
    markAttendance, markHoliday, attendanceReport, getAllHolidays, getAttendanceForEmployee
} = require('../controller/attendance/attendance')

router.route('/mark-attendance').post(markAttendance)
router.route('/mark-holiday').post(markHoliday)
router.route('/attendance-report').post(attendanceReport)
router.route('/get-holidays').get(getAllHolidays)
router.route('/get-employee-attendance').post(getAttendanceForEmployee)
module.exports = router