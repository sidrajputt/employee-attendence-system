const express = require('express')
const router = express.Router()
const { createEmployee } = require('../controller/employee/createEmployee')
const { employeeLogin } = require('../controller/employee/employeeLogin')
const { employeeLogout } = require('../controller/employee/employeeLogout')
const { updateEmployee } = require('../controller/employee/updateEmployee')
const { deleteEmployee } = require('../controller/employee/deleteEmployee')
const { getEmployees } = require('../controller/employee/getEmployees')

router.route('/createEmployee').post(createEmployee)
router.route('/updateEmployee').patch(updateEmployee)
router.route('/employeeLogin').post(employeeLogin)
router.route('/employeeLogout').post(employeeLogout)
router.route('/deleteEmployee').get(deleteEmployee)
router.route('/getEmployees').get(getEmployees)

module.exports = router