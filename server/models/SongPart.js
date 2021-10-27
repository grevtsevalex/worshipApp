const db = require('../db');

const songPartSchema = new db.Schema({
  id:    String,
  title: String,
  text:  Array, // SongLine[]
});

module.exports = db.model('SongPart', songPartSchema);