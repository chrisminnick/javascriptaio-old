import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/user.js';

const router = express.Router();

function generateAccessToken(username) {
  return jwt.sign(username, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '300s',
  }); //expires in 5 minutes
}

let refreshTokens = [];

function generateRefreshToken(username) {
  const refreshToken = jwt.sign(username, process.env.REFRESH_TOKEN_SECRET);
  refreshTokens.push(refreshToken);
  return refreshToken;
}

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

// Logging in a user
router.post('/login', (req, res) => {
  User.findOne({ email: req.body.email }, async (err, user) => {
    if (err) throw err;
    if (!user) {
      res.status(401).json({
        message: 'Login failed!',
      });
    }
    const isMatch = bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      res.status(401).json({
        message: 'Incorrect password',
      });
    }
    if (isMatch) {
      const accessToken = generateAccessToken({ user: req.body.email });
      res.status(200).json({
        accessToken: accessToken,
        userId: user._id,
      });
    }
  });
});

//REFRESH TOKEN API
router.post('/refreshToken', (req, res) => {
  if (!refreshTokens.includes(req.body.token))
    res.status(400).send('Refresh Token Invalid');
  refreshTokens = refreshTokens.filter((c) => c != req.body.token);
  //remove the old refreshToken from the refreshTokens list
  const accessToken = generateAccessToken({ user: req.body.name });
  const refreshToken = generateRefreshToken({ user: req.body.name });
  //generate new accessToken and refreshTokens
  res.json({ accessToken: accessToken, refreshToken: refreshToken });
});

router.delete('/logout', (req, res) => {
  refreshTokens = refreshTokens.filter((c) => c != req.body.token);
  //remove the old refreshToken from the refreshTokens list
  res.status(204).send('Logged out!');
});

export default router;
