const Joi = require('joi');

const schema = {
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
  email: Joi.string().email({ minDomainAtoms: 2 }).required(),
};

module.exports = schema;
