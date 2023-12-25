const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  employeeId:  {
    type: String,
    required: true,
  },
  firstName:  {
    type: String,
    required: true,
  },
  lastName:  {
    type: String,
    required: true,
  },
  password:  {
    type: String,
    required: true,
  },
  dateofbirth:  {
    type: Date,
  },
  role: {
    type: String,
    default: "employee",
  },
  gender:  {
    type: String,
  },
  nationality: {
    type: String,
  },
  maritalStatus:  {
    type: String,
  },
  phone:  {
    type: Number,
    required: true,
    unique: true,
  },
  email:  {
    type: String,
    required: true,
    unique: true,
  },
  address:  {
    type: String,
  },
  designation:  {
    type: String,
  },
  department: {
    type: String,
  },
  employmentType:  {
    type: String,
  },
  workLocation: {
    type: String,
  },
  salary:  {
    type: Number,
    required: true,
  },
  emg_contact_person:  {
    type: String,
  },
  emg_contact_number: {
    type: Number,
  },
  bloodGroup:  {
    type: String,
  },
  healthCondition:  {
    type: String,
  },

  createdAt: {
    type: Number,
    default: Date.now,
  },
  updatedAt: {
    type: Number,
    default: Date.now,
  },
});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;
