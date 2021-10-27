const mongoose = require('mongoose');
const config   = require('./config');

async function start() {
  try {
    await mongoose.connect(config.dbUrl);
  }
  catch(e) {
    console.log(e);
  }
}

start();

module.exports = mongoose;

// const kittySchema = new mongoose.Schema({
//   name: String,
// });

// const Kitten = new mongoose.model('Kitten', kittySchema);
// const silence = new Kitten({ name: 'wtwete' });
// silence.save();
// // Kitten.find().then((r) => console.log(r));
