const Leave = require('../../models/leaveRequest')

const updateLeaveRequest = async (req, res) => {
    try {
        const { _id, status } = req.body;

        const response = await Leave.findById({_id:_id});

        if (!response) {
            return res.status(404).json({
                success: false,
                message: "Leave Request not found",
            });
        }

        // Update the status of the leave request
        response.status = status;

        // Save the updated leave request
        const updatedLeaveRequest = await response.save();

        return res.json({
            success: true,
            message: "Leave Request updated successfully",
            updatedLeaveRequest
        });
    } catch (err) {
        console.log(err);
        return res.json({
            success: false,
            message: err.message || "Something went wrong"
        });
    }
};
module.exports = { updateLeaveRequest }