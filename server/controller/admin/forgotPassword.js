const Admin = require('../../models/admin')
const { codeGenerator } = require('../../utils/codeGenerator')
const { sendMail } = require('../../utils/sendMail')

const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body

        let searchedAdmin = await Admin.findOne({ email })

        if (!searchedAdmin) return res.status(404).json({
            success: false,
            message: 'Admin not found'
        })

        let code = codeGenerator()

        searchedAdmin.forgotPasswordToken = code
        searchedAdmin.forgotPasswordTokenExpiry = Date.now() + 120000 // 2 minutes expiration

        sendMail(email, "Password change request", `Your code is : ${code}`)

        await searchedAdmin.save()

        return res.status(200).json({
            success: true,
            message: "a code has been sent to your email",
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

module.exports = { forgotPassword }