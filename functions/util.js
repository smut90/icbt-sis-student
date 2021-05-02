const { validationResult } = require('express-validator');

const performValidation = (...validators) => {
  const validationHandler = async (req, res, next) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      return res.status(400).send((validationErrors.array()));
    }
    next();
    return Promise.resolve();
  };

  return [...validators, validationHandler]
};

module.exports = {
  performValidation
};
