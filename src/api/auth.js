const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const { User } = require('../models');

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    res.status(403);
  }

  if (!user.authenticate(password)) {
    res.status(401);
  }

  const token = user.generateToken();

  res.json({ token, user });
});

module.exports = router;
