const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true,
    },
    date: {
        type: Number,
        required: true
    },
    workHours: {
        type: Number,
        required: true,
        default: 0,
    },
    startdAt: {
        type: Number,
        required: true,
    },
    endedAt: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true, // This will add created_at and updated_at fields
  });

const Attendance = mongoose.model('Attendance', AttendanceSchema);

module.exports = Attendance;