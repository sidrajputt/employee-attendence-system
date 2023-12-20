const Employee = require('../../models/employee')
const bcryptjs = require('bcryptjs')

const createEmployee = async (req, res) => {
    try {
        let { firstName, lastName, email, phone, password, dob, gender, role } = req.body

        // check if user exists
        const searchedEmployee = await Employee.findOne({ email })

        if (searchedEmployee) {
            return res.json({
                success: false,
                message: "Employee already exists"
            })
        }

        const newDob = new Date(dob).getTime()
        const currentTimestamp = Date.now()

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newEmployee = new Employee({
            profileUrl: "https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049569.jpg?w=360&t=st=1702966423~exp=1702967023~hmac=f58ac7803833d2b7d5497f09ff4977e0f4c13c1128b138e7b0effb57c9133a77",
            firstName,
            lastName,
            email,
            phone,
            password: hashedPassword,
            dob: newDob,
            gender,
            role,
            createdAt: currentTimestamp,
            updatedAt: currentTimestamp
        })

        let createdEmployee = await newEmployee.save()

        createdEmployee.password = undefined

        console.log(createdEmployee)

        return res.json({
            success: true,
            message: "Employee created successfully",
            createdEmployee
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

module.exports = { createEmployee }