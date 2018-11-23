const express = require('express');

const { User } = require('../models');

const router = express.Router();

// @route POST /user
// @desc  Create new user
// @access  Public
router.post('/', async (req, res) => {
  const user = req.body;
  const duplicateUser = await User.findOne({email: user.email});
  if (duplicateUser) {
    res.status(403).json('User with this email already exist');
  }

  // TO DO: it should be not possible to create many users with the same email
  User.create(user).then(newUser => {
    res.json(newUser);
  }).catch(() => {
    res.status(400).json('Bad request');
  });
})

module.exports = router;
