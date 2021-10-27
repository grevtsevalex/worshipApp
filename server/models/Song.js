const db = require('../db');

const songSchema = new db.Schema({
  id:   String,
  text: Array, // SongPart[]
});

module.exports = db.model('Song', songSchema);