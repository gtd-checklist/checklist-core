const express = require('express');

const router = express.Router();

const { User } = require('../models');

/*
// @route GET /users
// @desc  Get All Users
// @access  Public
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});
*/

// @route POST /user
// @desc  Create new user
// @access  Public
router.post('/', async (req, res) => {
  const user = req.body;
  await User.create(user, (err, resp) => {
    if (err) {
      res.status(400).json('Bad request');
    } else {
      res.json(resp);
    }
  });
})

module.exports = router;
