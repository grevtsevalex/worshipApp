const {Schema, model} = require('../db');

const songSchema = new Schema({
  title:  String,
  tags:   Array,
  text:   String,
  author: String,
});

module.exports = model('Song', songSchema);