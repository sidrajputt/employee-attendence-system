const Admin = require("../../models/admin");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { email, phone, password } = req.body;
console.log(req.body);
    // Input validation
    if (!email && !phone) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    if (!password) {
      return res.status(400).json({
        success: false,
        message: "Password required fields",
      });
    }

    // Search for the admin
    let searchedAdmin;
    if (email) {
      searchedAdmin = await Admin.findOne({ email });
    } 
     if (phone) {
      searchedAdmin = await Admin.findOne({ phone });
    }
    console.log(searchedAdmin)

    // If admin not found
    if (!searchedAdmin) {
      return res.status(404).json({
        success: false,
        message: "Admin doesn't exist",
      });
    }

    // If password is correct
    const isRightPassword = await bcryptjs.compare(
      password,
      searchedAdmin.password
    );

    if (!isRightPassword) {
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }


          //generate a token for user and send it
          const token = jwt.sign(
            { id: searchedAdmin._id, },
            process.env.JWT_SECRET, //secret
            {
              expiresIn: "1d",
            }
          );


    

    searchedAdmin.password = undefined;

    res.cookie("token", token, {
      expires: new Date(Date.now() + 3600000),
        httpOnly: true,
        withCredentials: true,
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      admin: searchedAdmin,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
 
    });
  }
};

module.exports = { login };
