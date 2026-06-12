const UserModel = require("../models/userModel");

// Signup Controller
const SignupController = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validation
        if (!name || !email || !password) {
            return res.status(400).json({
                status: "invalid",
                message: "All fields are required"
            });
        }

        // Check email already exists
        const userMail = await UserModel.findOne({ email });

        if (userMail) {
            return res.status(400).json({
                status: "invalid",
                message: "Email already exists"
            });
        }

        // Check username already exists
        const userName = await UserModel.findOne({ name });

        if (userName) {
            return res.status(400).json({
                status: "invalid",
                message: "Username already exists"
            });
        }

        // Create user
        const user = await UserModel.create({
            name,
            email,
            password
        });

        return res.status(201).json({
            status: "success",
            message: "User created successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: error.message
        });
    }
};

// Signin Controller
const SigninController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({
                status: "invalid",
                message: "Email and password are required"
            });
        }

        // Find user
        const user = await UserModel.findOne({ email, password });

        if (!user) {
            return res.status(400).json({
                status: "invalid",
                message: "Invalid email or password"
            });
        }

        return res.status(200).json({
            status: "success",
            message: "User login successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: error.message
        });
    }
};

module.exports = {
    SignupController,
    SigninController
};