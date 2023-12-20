const Employee = require('../../models/employee')

const deleteEmployee = async (req, res) => {
    try {
        let { id } = req.body

        let deletedEmployee = await Employee.deleteOne({ _id: id })

        console.log(deletedEmployee)

        return res.json({
            success: true,
            message: "Employee deleted successfully",
            deletedEmployee
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

module.exports = { deleteEmployee }