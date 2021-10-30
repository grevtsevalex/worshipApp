const express = require('express');
const app     = express();
const Song    = require('./models/Song');

const HOST = '127.0.0.1';
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app
  .route('/api/v1/songs')
  .get(async (req, res) => {

    res.status(200).json(await Song.find());
  })
  
  app.route('/')
  .get((req, res) => res.send('hello'))


app.listen(PORT, HOST, () => {
  console.log('Server listen on port: '  + PORT);
});