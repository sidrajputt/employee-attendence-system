const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
    activityName: {
        type: String,
        enum: ["startWork", "break", "leaveRequest"],
        required: true,
    },
    latitude: {
        type: String,
        required: function () {
            this.activityName === "startWork"
        }
    },
    longitude: {
        type: String,
        required: function () {
            this.activityName === "startWork"
        }
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true,
    },
    createdAt: {
        type: Number,
        required: true,
        default: Date.now(),
    },
}, {
    timestamps: true, // This will add created_at and updated_at fields
  });

const Activity = mongoose.model('Activity', ActivitySchema);

module.exports = Activity;