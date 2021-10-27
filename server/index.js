const SongLine = require('./models/SongLine');

const line = new SongLine({id: '1234', text: 'Не забуду я, как Ты освободил нас', chords: 'Fm C# G# D#'});
line.save();