


  
  // models/attendanceModel.js
  const mongoose = require('mongoose');
  
  const attendanceSchema = new mongoose.Schema({
    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee', // Assuming you have an Employee model
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
      required: true,
    },
    status: {
      type: String,
      enum: ['present', 'absent', 'holiday'],
      required: true,
    },
  }, {
    timestamps: true, // This will add created_at and updated_at fields
  });

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;