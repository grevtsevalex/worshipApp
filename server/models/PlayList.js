const db = require('../db');

const playListSchema = new db.Schema({
  songs:        Array,
  author:       String,
  participates: Array,
  createDate:   Date,
});

module.exports = db.model('PlayList', playListSchema);