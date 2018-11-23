const jwt = require('jsonwebtoken');
const Joi = require('joi');
const schema = require('../validators');

function initState(req, res, next) {
  if (!req.state) {
    req.state = {};
  }

  return next();
}

function validateToken(req, res, next) {
  const bearerHeader = req.headers.authorization;

  if (!bearerHeader) {
    return res.sendStatus(401);
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

// eslint-disable-next-line
function checkToken(req, res, next) {
  throw Error('Not implemented yet');
}

function setUserId(req, res, next) {
  const { userId } = req.params;

  console.log(req.headers);

  if (!userId) {
    return res.sendStatus(400);
  if (!bearerHeader) {
    res.sendStatus(401);
  }

  req.state.userId = userId;
  return next();
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

module.exports = {
  validateToken,
  validateData,
  setUserId,
  checkToken,
  initState
};
