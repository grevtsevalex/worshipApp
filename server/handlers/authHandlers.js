const ApiResponse     = require('../models/ApiResponse');
const {generateToken} = require('../auth');

const login = async (req, res) => {
  const response = new ApiResponse();

  if (!req.body.login || !req.body.pass) {
    response.error = 'Неверные параметры';
    return res.status(400).json(response);
  }

  const token = await generateToken(req.body.login, req.body.pass);
  console.log(token);

  if (!token) {
    response.error = 'Authentication error. Can\'t generate token';
    return res.status(400).json(response);
  }

  response.data = token;
  return res.status(200).json(response);
};

module.exports = {login};