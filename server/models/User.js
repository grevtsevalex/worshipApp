const db = require('../db');

const userSchema = new db.Schema({
  login: String,
  pass:  String,
});

module.exports = db.model('User', userSchema);