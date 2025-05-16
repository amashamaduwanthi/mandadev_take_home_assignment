const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dbFunctions = require('../db/dbFunctions.js');

// Sign Up Route
router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //  Validate input
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Name, email, and password are required' });
        }

        // Check if user already exists
        const existingUser = await dbFunctions.findUserByEmail(email);
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        //  Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        //  Create new user
        const newUser = await dbFunctions.createUser({
            name,
            email,
            password: hashedPassword
        });

        //  Generate token
        const token = jwt.sign(
            { id: newUser._id, email: newUser.email, name: newUser.name },
            process.env.SECRET_KEY,
            { expiresIn: '1h' }
        );

        // Return response
        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: newUser._id,
                email: newUser.email,
                name: newUser.name
            },
            token
        });

    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
});

module.exports = router;
