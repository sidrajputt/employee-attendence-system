const express = require('express')
const { createLeaveRequest } = require('../controller/others/createLeaveRequest')
const { getLeaveRequests } = require('../controller/others/getLeaveRequests')
const router = express.Router()

router.route('/createLeaveRequest').post(createLeaveRequest)
router.route('/leaveRequests').get(getLeaveRequests)

module.exports = router