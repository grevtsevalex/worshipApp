const db = require('../db');

const playListSchema = new db.Schema({
  id:           String,
  songs:        Array,  // Song[]
  createDate:   String,
  author:       Object, // User
  participates: Array,  // User[]
});

module.exports = db.model('PlayList', playListSchema);