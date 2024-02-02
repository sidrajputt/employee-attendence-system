// models/holidayModel.js
const mongoose = require('mongoose');

const HolidaySchema = new mongoose.Schema({
  date: {
    type: Date,
   
  },
  description: {
    type: String,
    required: true,
  },
}, {
    timestamps: true, // This will add created_at and updated_at fields
  });

const Holiday = mongoose.model('Holiday', HolidaySchema);

module.exports = Holiday;
