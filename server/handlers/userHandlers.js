const ApiResponse = require('../models/ApiResponse');
const ApiUser     = require('../api/ApiUser');
const bcrypt      = require('bcrypt');

const createUser = async (req, res) => {
  const response = new ApiResponse();

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
    response.data   = await ApiUser.createUser(req.body.login, hash);
    response.result = Boolean(response.data);
    return res.status(201).json(response);
  })
  .catch(e => {
    response.error = e.message;
    return res.status(400).json(response);
  })
};

const deleteUser = async (req, res) => {
  const response = new ApiResponse();
  if (!req.query.id) {
    response.error = 'Неверный идентификатор';
    return res.status(400).json(response);
  }

  try {
    response.data = await ApiUser.deleteUser(req.query.id);
    response.result = true;
    return res.status(response.data.deletedCount === 0 ? 202 : 200).json(response);
  }
  catch(e) {
    response.error = e;
    return res.status(400).json(response);
  }
};

const updateUser = async (req, res) => {
  const response = new ApiResponse();
  const saltRounds = 10;

  bcrypt.hash(req.body.pass, saltRounds).then(async hash => {
    response.data   = await ApiUser.updateUser(req.query.id, req.body.login, hash);
    response.result = Boolean(response.data);
    return res.status(0 === response.data.matchedCount ? 204 : 200).json(response);
  })
  .catch(e => {
    response.error = e.message;
    return res.status(400).json(response);
  })
};


module.exports = {createUser, deleteUser, updateUser};