const express = require('express');
const user = require('./user');
const activity = require('./activity');
const auth = require('./auth');

const router = express.Router();

router.use('/user', user);
router.use('/activity', activity);
router.use('/auth', auth);

router.get('/', (req, res) => {
  res.send('Hello, world!');
})

module.exports = {
  router
};
