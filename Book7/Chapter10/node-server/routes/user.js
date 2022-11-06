require('dotenv').config();

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

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

// Creating a new user
router.post('/signup', (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new User({
      email: req.body.email,
      password: hash,
    });
    user
      .save()
      .then((result) => {
        res.status(201).json({
          message: 'User created!',
          result: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: 'Invalid authentication credentials!',
        });
      });
  });
});

// Logging in a user
router.post('/login', (req, res, next) => {
  let fetchedUser;
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: 'Auth failed!',
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then((result) => {
      if (!result) {
        return res.status(401).json({
          message: 'Auth failed!',
        });
      }
      const accessToken = generateAccessToken({ user: req.body.email });
      const refreshToken = generateRefreshToken({ user: req.body.email });

      res.status(200).json({
        accessToken: accessToken,
        refreshToken: refreshToken,
        userId: fetchedUser._id,
      });
    })
    .catch((err) => {
      return res.status(401).json({
        message: 'Invalid authentication credentials!',
      });
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

module.exports = router;
