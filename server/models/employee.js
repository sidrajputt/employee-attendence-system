const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profileUrl: {
    type: String,
    default: "https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049569.jpg?w=360&t=st=1702966423~exp=1702967023~hmac=f58ac7803833d2b7d5497f09ff4977e0f4c13c1128b138e7b0effb57c9133a77"
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
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
