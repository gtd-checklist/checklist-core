const authSchema = require('./auth');
const userSchema = require('./user');

module.exports = {
  '/auth': authSchema,
  '/user': userSchema,
}
