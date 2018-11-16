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
  const { token, exp } = user.generateToken();
  user.password = undefined;
  return res.json({ token, exp, user });
});

module.exports = router;
