const Admin = require('../../models/admin')
const bcryptjs = require('bcryptjs')

const updateAdmin = async (req, res) => {
    try {
        const reqBody = req.body

        let searchedAdmin = await Admin.findById(reqBody.id)

        if (!searchedAdmin) return res.status(404).json({
            success: false,
            message: 'Admin not found'
        })

        if (reqBody.firstName) searchedAdmin.firstName = reqBody.firstName
        if (reqBody.lastName) searchedAdmin.lastName = reqBody.lastName
        if (reqBody.email) searchedAdmin.email = reqBody.email
        if (reqBody.profileUrl) searchedAdmin.profileUrl = reqBody.profileUrl
        if (reqBody.phone) searchedAdmin.phone = reqBody.phone

        if (reqBody.password) {
            const salt = await bcryptjs.genSalt(10)
            const hashedPassword = await bcryptjs.hash(reqBody.password, salt)
            searchedAdmin.password = hashedPassword
        }

        let updatedAdmin = await searchedAdmin.save()

        updatedAdmin.password = undefined

        console.log(updatedAdmin)

        return res.status(200).json({
            success: true,
            message: "User updated successfully",
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

module.exports = { updateAdmin }