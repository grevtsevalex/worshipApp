const express = require('express');
const app     = express();
const HOST    = '127.0.0.1';
const PORT    = 3000;
const {getAllSongs, createNewSong, changeSong, deleteSong}      = require('./handlers/songHandlers');
const {createUser, deleteUser, updateUser}                      = require('./handlers/userHandlers');
const {login}                                                   = require('./handlers/authHandlers');
const {createPlayList, getUserPlaylists, addSongs, deleteSongs} = require('./handlers/playListHandlers');
const {checkLoginAndPassword}                                   = require('./middlewares/userMiddlewares');
const {checkId, authenticate}                                   = require('./middlewares/commonMiddlewares');
const {checkPlaylist}                                           = require('./middlewares/playlistMiddlewares');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Add headers before the routes are defined
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

app.route('/api/v1/songs/')
  .get(getAllSongs)
  .post(createNewSong, authenticate)
  .put(changeSong, authenticate)
  .delete(deleteSong, authenticate, checkId);

app.route('/api/v1/users/')
  .post(checkLoginAndPassword, createUser)
  .delete(deleteUser, authenticate, checkId)
  .put(checkLoginAndPassword, authenticate, updateUser);

app.route('/api/v1/users/login')
  .post(login);

app.route('/api/v1/playlist/')
  .get(getUserPlaylists, authenticate)
  .post(createPlayList, authenticate);

app.route('/api/v1/playlist/songs')
  .put(checkPlaylist, addSongs)
  .delete(checkPlaylist, deleteSongs)

app.listen(PORT, HOST, () => {
  console.log('Server listen on port: '  + PORT);
});