const Employee = require('../../models/employee')

const getAllEmployee = async (req, res) => {
    try {


        let AllEmployeeData = await Employee.find({ })

        console.log(AllEmployeeData)

        return res.status(200).json({
            success: true,
            message: "All Employee data fetched successfully",
            data: AllEmployeeData
        })
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({
            success: false,
            message: err.message || "something went wrong"
        })
    }
}

module.exports = { getAllEmployee }