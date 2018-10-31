const express = require('express');

const { User } = require('../models');

const router = express.Router();

// @route POST /user
// @desc  Create new user
// @access  Public
router.post('/', (req, res) => {
  const user = req.body;

  User.create(user).then(newUser => {
    res.json(newUser);
  }).catch(() => {
    res.status(400).json('Bad request');
  });
})

module.exports = router;
