const express = require('express')
const router = express.Router()
const { signup } = require('../controller/admin/signup')
const { login } = require('../controller/admin/login')
const { logout } = require('../controller/admin/logout')
const { updateAdmin } = require('../controller/admin/update')
const { forgotPassword } = require('../controller/admin/forgotPassword')
const { verifyPCC } = require('../controller/admin/verifyPCC')
const { changePassword } = require('../controller/admin/changePassword')

router.route('/signup').post(signup)
router.route('/login').post(login)
router.route('/logout').get(logout)
router.route('/update').patch(updateAdmin)
router.route('/forgotPassword').post(forgotPassword)
router.route('/verifypasswordchangecode').post(verifyPCC)
router.route('/changePassword').post(changePassword)

module.exports = router