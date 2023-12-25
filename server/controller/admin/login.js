const Admin = require("../../models/admin");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { email, phone, password } = req.body;
    console.log(req.body);
    var searchedAdmin;
    //search for the admin
    if (email) {
     searchedAdmin = await Admin.findOne({ email });
    }
    if (phone) {
    searchedAdmin = await Admin.findOne({ phone });
    }
    // if not found
    if (!searchedAdmin) {
      return res.status(404).json({
        success: false,
        message: "admin doesn't exist",
      });
    }

    //if password is correct
    const isRightPassword = await bcryptjs.compare(
      password,
      searchedAdmin.password
    );

    if (!isRightPassword) {
      return res.json({
        success: false,
        message: "Invalid password",
      });
    }

    const payload = {
      id: searchedAdmin._id,
    };

    const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    searchedAdmin.password = undefined;

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res
      .json({
        success: true,
        message: "Login successful",
        admin: searchedAdmin,
      })
      .status(200);
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

module.exports = { login };
