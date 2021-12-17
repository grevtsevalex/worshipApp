const ApiResponse = require('../models/ApiResponse');

const checkLoginAndPassword = (req, res, next) => {
  const response = new ApiResponse();
  if (!req.body.login || !req.body.pass) {
    response.error = 'Неверные данные';
    return res.status(400).json(response);
  }

  if (req.body.pass.length < 6) {
    response.error = 'Пароль должен содержать не менее 6 символов.';
    return res.status(400).json(response);
  }

  if (req.body.login.length < 3) {
    response.error = 'Логин должен содержать не менее 3 символов.';
    return res.status(400).json(response);
  }
  next();
};

module.exports = {checkLoginAndPassword};