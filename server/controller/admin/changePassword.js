const Admin = require('../../models/admin')
const bcryptjs = require('bcryptjs')

const changePassword = async (req, res) => {
    try {
        const { email, newPassword } = req.body

        let searchedAdmin = await Admin.findById({ email })

        if (!searchedAdmin) return res.status(404).json({
            success: false,
            message: 'Admin not found'
        })

        if (reqBody.password) {
            const salt = await bcryptjs.genSalt(10)
            const hashedPassword = await bcryptjs.hash(newPassword, salt)
            searchedAdmin.password = hashedPassword
        }

        let updatedAdmin = await searchedAdmin.save()

        updatedAdmin.password = undefined

        return res.status(200).json({
            success: true,
            message: "password changed successfully",
            user: updatedAdmin
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

module.exports = { changePassword }