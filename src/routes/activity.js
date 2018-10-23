const express = require('express');
const jwt = require('jsonwebtoken');

const { Activity } = require('../models');
const getToken = require('../middleware/validators');

const router = express.Router();
require('dotenv').config();

// @route GET /activity
// @desc Get All User Activity
// @access By Token
router.get('/', getToken, async (req, res) => {
  jwt.verify(req.token, process.env.JWT_SECRET, async (err, authData) => {
    if (err) {
      return res.sendStatus(401);
    }
    const activity = await Activity.find({ userId: authData.userId });
    return res.json(activity);
  });
});

// @route POST /activity
// @desc Post New Activity
// @access By Token
router.post('/', getToken, (req, res) => {
  jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
    if (err) {
      return res.sendStatus(401);
    }
    const activity = req.body;
    activity.userId = authData.userId;
    Activity.create(activity)
      .then(createdActivity => {
        res.json(createdActivity);
      }).catch(() => {
        res.sendStatus(400);
      });
    return res;
  });
});

// @route DELETE /activity
// @desc Delete Activity By Title
// @access By Token
router.delete('/', getToken, (req, res) => {
  jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
    if (err) {
      return res.sendStatus(401);
    }
    const activity = req.body;
    
    // Assuming that this users's activity name is unique
    Activity.findOneAndDelete({title: activity.title, userId: authData.userId})
      .then(() => {
        res.sendStatus(200);
      }).catch(() => {
        res.sendStatus(404);
      });
    return res;
  });
});

// This method is not into current project's documentation
router.put('/', getToken, (req, res) => {
  jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
    if (err) {
      return res.sendStatus(401);
    }
    const activity = req.body;

    // Assuming that this users's activity name is unique
    Activity.findOneAndUpdate({title: activity.title, userId: authData.userId}, 
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
});

module.exports = router;
