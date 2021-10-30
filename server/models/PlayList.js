const db = require('../db');

const playListSchema = new db.Schema({
  songs:        Array,
  createDate:   String,
  author:       Object,
  participates: Array,
});

module.exports = db.model('PlayList', playListSchema);