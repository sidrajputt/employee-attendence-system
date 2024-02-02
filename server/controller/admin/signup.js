const Admin = require('../../models/admin');
const bcryptjs = require('bcryptjs');

const signup = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, password } = req.body;

        // Input validation
        if (!firstName || !lastName || !email || !phone || !password) {
            return res.status(400).json({
                success: false,
                message: "Missing required fields",
            });
        }

        // Check if user with the provided email or phone already exists
        const existingUser = await Admin.findOne({ $or: [{ email }, { phone }] });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists",
            });
        }

        // Hash the password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // Create a new user
        const newUser = new Admin({
            firstName,
            lastName,
            email,
            phone,
            password: hashedPassword,
        });

        // Save the new user
        const createdUser = await newUser.save();

        // Remove the password from the response
        createdUser.password = undefined;

        console.log(createdUser);

        return res.status(201).json({
            success: true,
            message: "Admin created successfully",
            user: createdUser,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};

module.exports = { signup };
