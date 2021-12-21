const JWT      = require('jsonwebtoken');
const {jwtKey} = require('./config');
const bcrypt   = require('bcrypt');
const {findUserByLogin}  = require('./api/ApiUser');

const generateToken = async (login, pass) => {
  const user = await findUserByLogin(login)
  .catch(e => {console.log(e); return;});

  const result = await bcrypt.compare(pass, user.pass)
  .catch(e => {console.log(e); return;});

  if (!result) {
    console.log('Authentication failed');
    return;
  }
  let tokenn;

  JWT.sign({userId: user._id, login}, jwtKey, {expiresIn: '1h'}, (err, token) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(token);
  });
};

module.exports = {generateToken};