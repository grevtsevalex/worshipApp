const ApiResponse = require('../models/ApiResponse');
const ApiUser     = require('../api/ApiUser');
const bcrypt      = require('bcrypt');

const createUser = async (req, res) => {
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

  let isLoginExists = false;

  try {
    isLoginExists = await ApiUser.isLoginExists(req.body.login);
  }
  catch(e) {
    response.error = e;
    return res.status(400).json(response);
  }

  if (isLoginExists) {
    response.error = 'Пользователь с таким логином уже зарегистрирован';
    return res.status(400).json(response);
  }

  const saltRounds = 10;

  bcrypt.hash(req.body.pass, saltRounds).then(async hash => {
    const id = await ApiUser.createUser(req.body.login, hash)._id;
    response.result = Boolean(id);
    return res.status(201).json(response);
  })
  .catch(e => {
    response.error = e.message;
    return res.status(400).json(response);
  })
};

module.exports = {createUser};