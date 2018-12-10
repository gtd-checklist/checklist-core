const mongoose = require('mongoose');

const { Schema } = mongoose;

const DailyReportSchema = new Schema({
  day: Date,
  habits: [
    {
      habitId: Schema.Types.ObjectId,
      value: Number
    }
  ]
});

const JournalSchema = new Schema({
  userId: Schema.Types.ObjectId,
  reports: [DailyReportSchema]
});

module.exports = { JournalSchema };
