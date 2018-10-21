const express = require('express');

const { User } = require('../models');

const router = express.Router();

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
