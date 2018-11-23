const express = require('express');
const profile = require('./profile');
const habit = require('./habit');
const auth = require('./auth');
const review = require('./review');
const journal = require('./journal');

const { validateData } = require('../middleware/validators');

const router = express.Router();

router.use('/profile', validateData, profile);
router.use('/auth', validateData, auth);
router.use('/habits', habit);
router.use('/journal', journal);
router.use('/review', review);

router.get('/', (req, res) => {
  res.send('Hello, world!');
});

module.exports = {
  router
};
