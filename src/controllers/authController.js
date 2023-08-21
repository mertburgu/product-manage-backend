const authController = {};
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

authController.register = async (req, res) => {
    try {
        const { name, username, email, password } = req.body;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (username.length < 6) {
            return res.status(400).json({ message: 'Username must be at least 6 characters long' });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters long' });
        }

        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }

        const existingUser =  await User.findOne({
            $or: [{ email: email }, { username: username }]
        });
        if (existingUser) {
            return res.status(400).json({ message: 'Email or username already exists' });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = new User({
            name,
            username,
            email,
            password: hashedPassword
        });

        const savedUser = await user.save();

        res.status(200).json({ message: 'Registration successful' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

authController.login = async (req, res) => {
    try {
        const { emailOrUsername, password } = req.body;

        const user = await User.findOne({
            $or: [{ email: emailOrUsername }, { username: emailOrUsername }]
        });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email/username or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid email/username or password' });
        }

        const token = jwt.sign({ _id: user._id }, 'your_secret_key');

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = authController;