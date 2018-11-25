const express = require('express');
const Joi = require('joi');

const { User } = require('../models');
const schema = require('../validators/auth');

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  const validation = Joi.validate({ email, password }, schema);
  if (validation.error) {
    return res.status(403).send('Incorrect data');
  }
  
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return res.status(401).send('User not found');
  }
  if (!user.authenticate(password)) {
    return res.status(401).send('Password does not match');
  }
  const token = user.generateToken();
  return res.json({ token, user });
});

module.exports = router;
