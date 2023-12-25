const Admin = require('../../models/admin')

const getAdmins = async (req, res) => {
    try {
        const { id, email, phone, firstName, lastName, pageSize, pageNumber } = req.body

        //search for the Admins
        const filter = {};

        if (id) { filter._id = id }
        if (email) { filter.email = email }
        if (phone) { filter.phone = phone }
        if (firstName) { filter.firstName = firstName }
        if (lastName) { filter.lastName = lastName }

        const limit = pageSize ? Number(pageNumber) : 10

        const searchedAdmins = await Admin.find(filter).limit(limit).skip((pageNumber || pageNumber > 0 ? (pageNumber - 1) : 0) * pageSize)

        // if not found
        if (searchedAdmins.length === 0) {
            return res.status(404).json({
                success: false,
                message: "no admin match found"
            })
        }

        return res.json({
            success: true,
            message: "fetched successfully",
            Admins: searchedAdmins
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

module.exports = { getAdmins }