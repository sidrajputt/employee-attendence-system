const Activity = require('../../models/activity')

// Create a new activity
const createActivity = async (req, res) => {
    try {
      const newActivity = new Activity(req.body);
      const savedActivity = await newActivity.save();
      res.status(200).json(savedActivity);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

module.exports = { createActivity }