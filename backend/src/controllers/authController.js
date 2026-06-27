const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");

// Register User
const registerUser = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new ApiError(409, "User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({

        name,
        email,
        password: hashedPassword,

    });

    const generateToken = require("../utils/generateToken");

    const token = generateToken(user._id);

    res.status(201).json({

        success: true,

        message: "User registered successfully",

        token,

        user: {

            id: user._id,
            name: user.name,
            email: user.email,

        },

    });

});

// Login User
const loginUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    // if (!email || !password) {
    //     throw new ApiError(400, "Email and password are required");
    // }

    const user = await User.findOne({ email });

    if (!user) {
        throw new ApiError(401, "Invalid credentials");
    }

    const isPasswordCorrect = await bcrypt.compare(
        password,
        user.password
    );

    if (!isPasswordCorrect) {
        throw new ApiError(401, "Invalid password");
    }

    // const token = jwt.sign(
    //     {
    //         id: user._id,
    //     },
    //     process.env.JWT_SECRET,
    //     {
    //         expiresIn: "7d",
    //     }
    // );

    const generateToken = require("../utils/generateToken");
    const token = generateToken(user._id);

    res.status(200).json({
        success: true,
        token,
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
        },
    });

});

module.exports = {
    registerUser,
    loginUser,
};