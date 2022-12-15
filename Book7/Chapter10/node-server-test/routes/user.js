import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user.js';

const router = express.Router();

// create a new user
router.post('/signup', async (req, res) => {
  User.findOne({ email: req.body.email }, async (err, doc) => {
    if (err) throw err;
    if (doc) {
      res.status(409).json({
        message: 'User already exists!',
      });
    }
    if (!doc) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const newUser = new User({
        email: req.body.email,
        password: hashedPassword,
      });
      await newUser.save();
      res.status(201).json({
        message: 'User created!',
      });
    }
  });
});

// login a user
router.post('/login', (req, res) => {
  res.send(`You requested ${req.url} using the ${req.method} method`);
});

// log the user out
router.delete('/logout', (req, res) => {
  res.send(`You requested ${req.url} using the ${req.method} method`);
});

export default router;
