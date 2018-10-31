const express = require('express');

const { User } = require('../models');

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return res.status(401).send('User not found');
  }
  if (!user.authenticate(password)) {
    return res.status(401).send('Password does not match');
  }
  const token = user.generateToken();
  delete user.password; // This is not working :(
  return res.json({ token, user });
});

module.exports = router;