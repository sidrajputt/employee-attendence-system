const logout = (req, res) => {
    try {
        res.cookie("token", "", { httpOnly: true, maxAge: 0 })
        return res.json({
            success: true,
            message: "Logout successful"
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

module.exports = { logout }