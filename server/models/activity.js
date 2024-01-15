const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: true,
},
  activityType: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
}, {
    timestamps: true, 
  });

// Index for geospatial queries based on location coordinates
activitySchema.index({ location: '2dsphere' });

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;


