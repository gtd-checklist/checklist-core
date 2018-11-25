const jwt = require('jsonwebtoken');
const Joi = require('joi');
const schema = require('../validators');

function validateToken(req, res, next) {
  const bearerHeader = req.headers.authorization;
  if (!bearerHeader) {
    res.sendStatus(401);
  }
  const token = bearerHeader.split(' ')[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, authData) => {
    if (err) {
      return res.sendStatus(401);
    }
    req.authData = authData;
    return next();
  });
}

function validateData(req, res, next) {
  /* eslint no-underscore-dangle: ["error", { "allow": ["_parsedUrl"] }] */
  const route = req._parsedUrl.path;

  let valSchema = {};
  if (route === '/auth') {
    valSchema = schema['/auth'];
  } else if (route === '/user') {
    valSchema = schema['/user'];
  } else {
    return next();
  }

  const validation = Joi.validate(req.body, valSchema);
  if (validation.error) {
    return res.status(403).send('Incorrect data');
  }
  return next();
}

module.exports = { validateToken, validateData };
