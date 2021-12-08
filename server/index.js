const express = require('express');
const app     = express();
const HOST    = '127.0.0.1';
const PORT    = 3000;
const {getAllSongs, createNewSong, changeSong, deleteSong} = require('./handlers/songHandlers');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.route('/api/v1/songs/')
  .get(getAllSongs)
  .post(createNewSong)
  .put(changeSong)
  .delete(deleteSong)

app.listen(PORT, HOST, () => {
  console.log('Server listen on port: '  + PORT);
});