const {Schema, model} = require('../db');

const playListSchema = new Schema({
  songs:        [{ type: Schema.Types.ObjectId, ref: 'Song'}],
  author:       String,
  participates: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  createDate:   Date,
});

module.exports = model('PlayList', playListSchema);