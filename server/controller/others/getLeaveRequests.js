const Leave = require('../../models/leaveRequest')

const getLeaveRequests = async (req, res) => {

    const { id, employeeId, duration, moreThan, lessThan, createdAt, createdBefore, createdAfter, status, pageSize, pageNumber } = req.query

    const filter = {}

    if (id) { filter._id = id }
    if (employeeId) { filter.employeeId = id }
    if (status) { filter.status = status }


    if (duration) { filter.noOfDays = duration }
    if (lessThan) { filter.noOfDays = { ...filter.duration, $lt: lessThan } }
    if (moreThan) { filter.noOfDays = { ...filter.duration, $gt: moreThan } }

    if (createdAt) { filter.createdAt = { ...filter.createdAt, $lt: createdAt } }
    if (createdBefore) { filter.createdAt = { ...filter.createdAt, $lt: createdBefore } }
    if (createdAfter) { filter.createdAt = { ...filter.createdAt, $gt: createdAfter } }

    const defaultPageSize = 10
    const limit = pageSize ? Number(pageSize) : defaultPageSize

    try {
        const result = await Leave.find(filter).limit(limit).skip((pageNumber || pageNumber > 0 ? (pageNumber - 1) : 0) * pageSize)

        res.status(200).json({
            success: true,
            message: 'fetched successfully',
            data: result,
        })
    }
    catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: error.message || "Something went wrong"
        })
    }
}

module.exports = { getLeaveRequests }