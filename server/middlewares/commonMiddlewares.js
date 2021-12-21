const ApiResponse = require('../models/ApiResponse');
const JWT = require('jsonwebtoken');
const {jwtKey} = require('../config');

const checkId = (req, res, next) => {
  const response = new ApiResponse();
  if (!req.query.id) {
    response.error = 'Неверный идентификатор';
    return res.status(400).json(response);
  }
  next();
};

const authenticate = (req, res, next) => {
  const response = new ApiResponse();
  const {authorization} = req.headers;

  if (!authorization) {
    response.error = 'Authentication error';
    return res.status(401).json(response);
  }
  
  const token = authorization.split(' ')[1];
  console.log(token);

  JWT.verify(token, jwtKey, (err, decoded) => {
    if (err) {
      response.error = err;
      return res.status(401).json(response);
    }
    console.log(decoded);
    next();
  });
};

module.exports = {checkId, authenticate};