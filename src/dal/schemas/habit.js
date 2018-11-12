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
  kind: {
    type: String,
    required: true,
    enum: ['Simple', 'Numerical']
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
