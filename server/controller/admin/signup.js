// just for creating a hard coded admin

const Admin = require('../../models/admin')
const bcryptjs = require('bcryptjs')

const signup = async (req, res) => {
    try {
        const { firstName,
            lastName,
            email,
            profileUrl,
            phone,
            password } = req.body

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new Admin({
            firstName,
            lastName,
            email,
            profileUrl,
            phone,
            password: hashedPassword
        })

        let createdUser = await newUser.save()

        createdUser.password = undefined

        console.log(createdUser)

        return res.json({
            success: true,
            message: "User created successfully",
            user: createdUser
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

module.exports = { signup }