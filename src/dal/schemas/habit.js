const mongoose = require('mongoose');

const { Schema } = mongoose;

const HabitSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  frequency: [
    {
      type: Number,
      required: true,
      min: 0,
      max: 6
    }
  ],
  isNumerical: {
    type: Boolean,
    required: true
  },
  successCriteria: {
    number: Number,
    condition: {
      type: String,
      required: true,
      enum: ['GTE', 'EQ', 'LTE']
    }
  }
});

module.exports = { HabitSchema };
