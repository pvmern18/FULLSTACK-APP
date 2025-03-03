const User = require('../models/User');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

exports.registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;

       
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists.' });
        }

       
        const user = new User({ username, password });
        await user.save();

        
        const token = generateToken(user._id);

        res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        // Generate token
        const token = generateToken(user._id);

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};