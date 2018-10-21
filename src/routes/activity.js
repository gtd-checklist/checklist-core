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
      res.sendStatus(401);
    } else { 
      const activity = await Activity.find({ userId: authData.userId });
      res.json(activity);
    }
  })
});

// @route POST /activity
// @desc Post New Activity
// @access By Token
router.post('/', getToken, async (req, res) => {
  jwt.verify(req.token, process.env.JWT_SECRET, async (err, authData) => {
    if (err) {
      res.sendStatus(401);
    } else { 
      const activity = req.body;
      activity.userId = authData.userId;
      await Activity.create(activity, (error, createdActivity) => {
        if (error) {
          res.sendStatus(400);
        } else {
          res.json(createdActivity);
        }
      });
    }
  })
});

// @route DELETE /activity
// @desc Delete Activity By Title
// @access By Token
router.delete('/', getToken, async (req, res) => {
  jwt.verify(req.token, process.env.JWT_SECRET, async (err, authData) => {
    if (err) {
      res.sendStatus(401);
    } else {
      const activity = req.body;
      await Activity.findOneAndDelete({title: activity.title, userId: authData.userId}, error => {
        if (error) {
          res.sendStatus(404);
        } else {
          res.sendStatus(200);
        }
      });
    }
  })
});

// This method is not into current project's documentation
router.put('/', getToken, async (req, res) => {
  jwt.verify(req.token, process.env.JWT_SECRET, async (err, authData) => {
    if (err) {
      res.sendStatus(401);
    } else {
      const activity = req.body;
      await Activity.findByIdAndUpdate(authData.userId, 
        { title: activity.title, 
          successCriteria: activity.successCriteria, 
          frequency: activity.frequency,
          status: activity.status,
        }, (dbErr, updatedActivity) => {
        if (dbErr) {
          res.sendStatus(404);
        } else {
          res.json(updatedActivity);
        }
      });
    }
  })
});

module.exports = router;
