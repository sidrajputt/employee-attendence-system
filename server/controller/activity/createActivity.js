const Activiy = require('../../models/activity')

const createdActiviy = async (activityName, createdBy, latitude, longitude) => {
    try {
        const createdAt = Date.now()

        const newActiviy = new Activiy({
            activityName,
            latitude,
            longitude,
            createdBy,
            createdAt
        })

        let createdActiviy = await newActiviy.save()

        return {
            success: true,
            message: "activity created successfully",
            createdActiviy
        }
    }
    catch (err) {
        console.log(err)
        return {
            success: false,
            message: err.message || "something went wrong while creating activity"
        }
    }
}

module.exports = { createdActiviy }