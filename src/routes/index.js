const express = require('express');
const user = require('./user');
const activity = require('./activity');
const auth = require('./auth');

const { validateData } = require('../middleware/validators');

const router = express.Router();

router.use('/user', validateData, user);
router.use('/activity', activity);
router.use('/auth', validateData, auth);

router.get('/', (req, res) => {
  res.send('Hello, world!');
})

module.exports = {
  router
};
