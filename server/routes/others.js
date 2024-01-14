const express = require('express')
const { createLeaveRequest } = require('../controller/others/createLeaveRequest')
const { getLeaveRequests } = require('../controller/others/getLeaveRequests')
const { updateLeaveRequest } = require('../controller/others/updateLeaveRequest')
const router = express.Router()

router.route('/createLeaveRequest').post(createLeaveRequest)
router.route('/leaveRequests').get(getLeaveRequests)
router.route('/updateLeaveRequest').post(updateLeaveRequest)
module.exports = router