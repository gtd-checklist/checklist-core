const express = require('express');

const { Activity } = require('../models');
const validateToken = require('../middleware/validators');

const router = express.Router();
require('dotenv').config();

// @route GET /activity
// @desc Get All User Activity
// @access By Token
router.get('/', validateToken, async (req, res) => {
  const activity = await Activity.find({ userId: req.authData.userId });
  return res.json(activity);
});

// @route POST /activity
// @desc Post New Activity
// @access By Token
router.post('/', validateToken, (req, res) => {
  const activity = req.body;
  activity.userId = req.authData.userId;
  Activity.create(activity)
    .then(createdActivity => {
      res.json(createdActivity);
    }).catch(() => {
      res.sendStatus(400);
    });
  return res;
});

// @route DELETE /activity
// @desc Delete Activity By Title
// @access By Token
router.delete('/', validateToken, (req, res) => {
  const activity = req.body;
  
  // Assuming that this users's activity name is unique
  Activity.findOneAndDelete({title: activity.title, userId: req.authData.userId})
    .then(() => {
      res.sendStatus(200);
    }).catch(() => {
      res.sendStatus(404);
    });
  return res;
});

// This method is not into current project's documentation
router.put('/', validateToken, (req, res) => {
  const activity = req.body;

  // Assuming that this users's activity name is unique
  Activity.findOneAndUpdate({title: activity.title, userId: req.authData.userId}, 
    { title: activity.title, 
      successCriteria: activity.successCriteria, 
      frequency: activity.frequency,
      status: activity.status,
    }).then(updatedActivity => {
      res.json(updatedActivity);
    }).catch(() => {
      res.sendStatus(404);
    });
  return res;
});

module.exports = router;
