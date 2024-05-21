const UserModel = require("../models/UserModel");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function checkPassword(req, res) {
    try {
        const { password, userId } = req.body;
        const user = await UserModel.findById(userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
                error: true
            });
        }

        const verifyPassword = await bcryptjs.compare(password, user.password);

        if (!verifyPassword) {
            return res.status(400).json({
                message: "Please enter correct password",
                error: true
            });
        }

        const tokenData = {
            id: user._id,
            email: user.email
        };
        const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });

        const cookieOptions = {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
            sameSite: 'Lax'
        };

        console.log("Generated Token:", token); // Debugging: Log the token
        console.log("Cookie Options:", cookieOptions); // Debugging: Log cookie options

        res.cookie('token', token, cookieOptions);

        console.log("Response Headers:", res.getHeaders()); // Debugging: Log response headers

        return res.status(200).json({
            message: "Login successful",
            token: token,
            success: true
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true
        });
    }
}

module.exports = checkPassword;
