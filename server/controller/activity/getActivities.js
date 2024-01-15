const Activity = require('../../models/activity')

const getActivities = async (req, res) => {

    const { id, from, to, pageSize, pageNumber } = req.query

    const filter = {};

    if (id) { filter._id = id }
    if (from) { filter.createdAt = { $gte: from } }
    if (to) { filter.createdAt = { ...filter.createdAt, $lte: to } }

    const defaultPageSize = 10
    const limit = pageSize ? Number(pageSize) : defaultPageSize

    try {
        const result = await Activity.find(filter).limit(limit).skip((pageNumber || pageNumber > 0 ? (pageNumber - 1) : 0) * pageSize).populate({
            path: 'employee',
            model: 'Employee',
            select: 'employeeId firstName lastName'
        })
        .exec();

        res.status(200).json({
            success: true,
            message: 'Search successful',
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

module.exports = { getActivities }