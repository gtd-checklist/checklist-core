/* eslint no-underscore-dangle: 0 */
/* eslint-disable consistent-return */
// disabled this rule because "function" in callbacks. Using arrow => function leads to wrong "this" context
/* eslint func-names: 0 */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

const JWT_EXPIRE_TIME = require('../../config');

require('dotenv').config();

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

UserSchema.pre('save', function(next) {
  const user = this;
  bcrypt.hash(user.password, null, null, (err, hash) => {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

UserSchema.pre('update', function(next) {
  if (!this.password) {
    return;
  }
  
  const user = this;
  bcrypt.hash(user.password, null, null, (err, hash) => {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

UserSchema.method({
  /**
   * Authenticate - check if the passwords are the same
   * @public
   * @param {String} password
   * @return {Boolean} passwords match
   */
  authenticate(password) {
    return bcrypt.compareSync(password, this.password);
  },
  /**
   * Generates a JSON Web token used for route authentication
   * @public
   * @return {String} signed JSON web token
   */
  generateToken() {
    const token = jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
      expiresIn: JWT_EXPIRE_TIME
    });
    const exp = Math.floor(Date.now()/1000) + JWT_EXPIRE_TIME;
    return { token, exp };
  },

  decodeToken(token) {
    return jwt.decode(token, { complete: true });
  }
})

module.exports = mongoose.model('User', UserSchema);
