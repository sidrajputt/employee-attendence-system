const Employee = require('../../models/employee')
const bcryptjs = require('bcryptjs')

const createEmployee = async (req, res) => {
    try {
        let { employeeId, email, phone, password, salary, firstName, lastName } = req.body

        //check if the employeeID, email, phone, password are available in req.body
        if(!(employeeId && email && phone && password && salary && firstName && lastName)) {
            return res.status(400).json({
                success: false,
                message: "Please submit all detail of employee"
            })
        }
        


        // check if user exists
        const searchedEmployee = await Employee.findOne({ employeeId }) || await Employee.findOne({ email }) || await Employee.findOne({ phone }) 

        if (searchedEmployee) {
            return res.status(401).json({
                success: false,
                message: "Employee already exists"
            })
        }

     

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const employeeData = req.body;
        employeeData.password = hashedPassword

        const newEmployee = new Employee(employeeData)

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