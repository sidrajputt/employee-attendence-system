const { createdActiviy } = require("../activity/createActivity")

const employeeLogout = async (req, res) => {
    try {

        const { id, latitude, longitude } = req.body

        //create a "startWork" acticity
        const createdActivity = await createdActiviy("break", id, latitude, longitude)
        console.log(createdActivity)

        res.cookie("employeetoken", "", { httpOnly: true, maxAge: 0 })
        return res.json({
            success: true,
            message: "logout successful"
        })
    }

    catch (error) {
        console.log(error)
        return res.json({
            success: false,
            error: error.message || "something went wrong"
        })
    }
}

module.exports = { employeeLogout }