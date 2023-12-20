const Employee = require('../../models/employee')
const bcryptjs = require('bcryptjs')

const updateEmployee = async (req, res) => {
    try {
        const reqBody = req.body

        const searchedEmployee = await Employee.findById(reqBody.id)

        if (!searchedEmployee) {
            return res.status(404).json({
                success: false,
                message: "employee doesn't exist"
            })
        }

        if (reqBody.firstName) searchedEmployee.firstName = reqBody.firstName
        if (reqBody.lastName) searchedEmployee.lastName = reqBody.lastName
        if (reqBody.email) searchedEmployee.email = reqBody.email
        if (reqBody.profileUrl) searchedEmployee.profileUrl = reqBody.profileUrl
        if (reqBody.phone) searchedEmployee.phone = reqBody.phone
        if (reqBody.role) searchedEmployee.role = reqBody.role

        if (reqBody.password) {
            const salt = await bcryptjs.genSalt(10)
            const hashedPassword = await bcryptjs.hash(reqBody.password, salt)
            searchedEmployee.password = hashedPassword
        }

        let updatedEmployee = await searchedEmployee.save()

        updatedEmployee.password = undefined

        console.log(updatedEmployee)

        return res.json({
            success: true,
            message: "Employee updated successfully",
            updatedEmployee
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

module.exports = { updateEmployee }