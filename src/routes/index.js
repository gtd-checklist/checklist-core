const express = require('express');
const profile = require('./profile');
const habit = require('./habits');
const review = require('./review');
const journal = require('./journal');
const auth = require('./auth');

const { validateParams } = require('../middleware/validators');

const router = express.Router();

router.use('/auth', validateParams(auth.schema), auth.router);
router.use('/profile', validateParams(profile.schema), profile.router);
router.use('/habits', /* validateParams(habit.schema) , */ habit.router);
router.use('/journal', /* validateParams(journal.schema) , */ journal.router);
router.use('/review', /* validateParams(review.schema), */ review.router);

router.get('/', (req, res) => {
  res.send('Hello, world!');
});

module.exports = {
  router
};
