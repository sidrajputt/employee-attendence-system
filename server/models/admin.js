const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
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
    },
    phone: {
        type:Number,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: {
        type: Number,
        default: null,
    }
}, {
    timestamps: true,
});

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;
