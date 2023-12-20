const Employee = require('../../models/employee')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { createdActiviy } = require('../activity/createActivity')

const employeeLogin = async (req, res) => {
    try {
        const { email, password, longitude, latitude } = req.body

        //if Employee exists
        const searchedEmployee = await Employee.findOne({ email })

        if (!searchedEmployee) {
            return res.status(404).json({
                success: false,
                message: "employee doesn't exist"
            })
        }

        //if password is correct
        const isRightPassword = await bcryptjs.compare(password, searchedEmployee.password)

        if (!isRightPassword) {
            return res.json({
                success: false,
                message: "Invalid password"
            })
        }

        //create a "startWork" acticity
        const createdActivity = await createdActiviy("startWork", searchedEmployee._id, latitude, longitude)
        console.log(createdActivity)

        const payload = {
            employeeId: searchedEmployee._id
        }

        const token = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "1d" })

        searchedEmployee.password = undefined

        res.cookie("employeetoken", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        })

        return res.json({
            success: true,
            message: "Login successful",
            Employee: searchedEmployee
        }).status(200)
    }
    catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: error.message || "Something went wrong"
        })
    }
}

module.exports = { employeeLogin }