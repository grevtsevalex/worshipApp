const ApiResponse       = require('../models/ApiResponse');
const JWT               = require('jsonwebtoken');
const bcrypt            = require('bcrypt');
const {jwtKey}          = require('../config');
const {findUserByLogin} = require('../api/ApiUser');

const login = async (req, res) => {
  const response = new ApiResponse();
  const {login, pass} = req.body;

  if (!login || !pass) {
    response.error = 'Неверные параметры';
    return res.status(400).json(response);
  }

  const user = await findUserByLogin(login)
  .catch(e => {console.log(e); return;});

  const result = await bcrypt.compare(pass, user.pass)
  .catch(e => {console.log(e); return;});

  if (!result) {
    console.log('Authentication failed');
    return;
  }

  JWT.sign({userId: user._id, login}, jwtKey, {expiresIn: '1h'}, (err, token) => {
    if (err) {
      response.error = err;
      return res.status(400).json(response);
    }
    response.data = token;
    return res.status(200).json(response);
  });
};

module.exports = {login};