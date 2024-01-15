const express = require('express')
const router = express.Router()
const { getActivities } = require('../controller/activity/getActivities')
const { createActivity } = require('../controller/activity/createActivity')
router.route('/create-activities').post(createActivity);
router.route('/activities').get(getActivities);

module.exports = router