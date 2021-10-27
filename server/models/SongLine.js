const db = require('../db');

const songLineSchema = new db.Schema({
  id:     String,
  text:   String,
  chords: String,
});

module.exports = db.model('SongLine', songLineSchema);