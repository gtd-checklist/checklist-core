const jwt = require('jsonwebtoken');

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

module.exports = validateToken;
