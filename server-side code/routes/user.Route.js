const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userRegisterSchema');
const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
  try {
    const { name,email,mobile, password } = req.body;

    const existedUser = await User.findOne({email})

    if(existedUser){
      return res.status(400).send('User already exists')
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ name,email,mobile, password: hashedPassword });
    await newUser.save();

    res.status(201).send('User registered successfully');

  } catch (error) {
    res.status(500).json({error_message :'Error registering user'});
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) return res.status(400).send('Invalid username or password');

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) return res.status(400).send('Invalid username or password');

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).send('Error logging in');
  }
});

module.exports = router;
