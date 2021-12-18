const JWT      = require('jsonwebtoken');
const {jwtKey} = require('./config');
const bcrypt   = require('bcrypt');
const {findUserByLogin}  = require('./api/ApiUser');

const autentication = async (login, pass) => {
  let user = null;
  try {
    user = await findUserByLogin(login);
  }
  catch(e) {
    console.log(e);
    return;
  }

  let result = false;
  try {
    result = await bcrypt.compare(pass, user.pass);
  }
  catch(e) {
    console.log(e);
    return;
  }

  if (!result) {
    console.log('Authentication failed');
    return;
  }

  JWT.sign({userId: user._id, login}, jwtKey, {expiresIn: '30'}, (err, token) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(token);
  });
};

module.exports = {autentication};