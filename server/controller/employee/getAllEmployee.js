const Employee = require('../../models/employee')

const getAllEmployee = async (req, res) => {
    try {
console.log("lolo")

        let AllEmployeeData = await Employee.find({ })

        // console.log(AllEmployeeData)

        return res.status(201).json({
            success: true,
            message: "All Employee data fetched successfully",
            data: AllEmployeeData
        })
    }
    catch (err) {
        console.log(err)
        return res.status(504).json({
            success: false,
            message: err.message || "something went wrong"
        })
    }
}

module.exports = { getAllEmployee }