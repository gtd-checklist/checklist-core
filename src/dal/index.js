const mongoose = require('mongoose');

const { UserSchema } = require('./schemas/user');
const { HabitSchema } = require('./schemas/habit');

module.exports = {
  User: mongoose.model('User', UserSchema),
  Habit: mongoose.model('Habit', HabitSchema)
}
