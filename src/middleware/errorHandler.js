function errorHandler(err, req, res, next) {
  res.sendStatus(401);
}

module.exports = errorHandler;
