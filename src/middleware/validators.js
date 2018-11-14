const jwt = require('jsonwebtoken');

function validateToken(req, res, next) {
  const bearerHeader = req.headers.authorization;
  if (typeof bearerHeader === 'undefined') {
    const err = new Error('There is no token in a header');
    next(err);
  }
  const token = bearerHeader.split(' ')[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, authData) => {
    if (err) {
      next(err);
    }
    req.authData = authData;
    next();
  });
}

module.exports = validateToken;
