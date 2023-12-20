const Admin = require('../../models/admin')
const jwt = require('jsonwebtoken')

const verifyPCC = async (req, res) => {
    try {
        const { email, code } = req.body

        let searchedAdmin = await Admin.findOne({ email })

        if (!searchedAdmin) return res.status(404).json({
            success: false,
            message: 'Admin not found'
        })

        const token = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "1d" })

        if (searchedAdmin.forgotPasswordTokenExpiry > Date.now() && searchedAdmin.forgotPasswordToken == code) {

            const payload = { id: searchedAdmin._id }

            jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "1d" })

            res.cookie("changePasswordToken", token, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000
            })
        }

        return res.status(200).json({
            success: true,
            message: "you can now change your password",
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

module.exports = { verifyPCC }