const Leave = require('../../models/leaveRequest')

const createLeaveRequest = async (req, res) => {
    try {
        const { employeeId, reason, status, noOfDays, startDate, endDate } = req.body

        const newRequest = new Leave({
            employeeId,
            reason,
            status,
            requestedOn: Date.now(),
            noOfDays,
            startDate,
            endDate
        })

        let createdLeaveRequest = await newRequest.save()

        return res.json({
            success: true,
            message: "Leave Request created successfully",
            createdLeaveRequest
        })
    }
    catch (err) {
        console.log(err)
        return res.json({
            success: false,
            message: err.message || "something went wrong"
        })
    }
}

module.exports = { createLeaveRequest }