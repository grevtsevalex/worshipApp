const db = require('../db');

const songSchema = new db.Schema({
  title:  String,
  tags:   Array,
  text:   String,
  author: String,
});

module.exports = db.model('Song', songSchema);