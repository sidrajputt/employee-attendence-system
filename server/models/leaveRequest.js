const mongoose = require('mongoose');

const LeaveSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true,
    },
    reason: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        required: true
    },
    requestedOn: {
        type: Date,
        required: true,
        default: Date.now()
    },
    noOfDays: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }
}, {
    timestamps: true, // This will add created_at and updated_at fields
  });
const Leave = mongoose.model('Leave', LeaveSchema);

module.exports = Leave;