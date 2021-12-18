const express = require('express');
const app     = express();
const HOST    = '127.0.0.1';
const PORT    = 3000;
const {getAllSongs, createNewSong, changeSong, deleteSong} = require('./handlers/songHandlers');
const {createUser, deleteUser, updateUser}                 = require('./handlers/userHandlers');
const {checkLoginAndPassword}                              = require('./middlewares/userMiddlewares');
const {checkId}                                            = require('./middlewares/commonMiddlewares');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.route('/api/v1/songs/')
  .get(getAllSongs)
  .post(createNewSong)
  .put(changeSong)
  .delete(deleteSong, checkId);

app.route('/api/v1/users/')
  .post(checkLoginAndPassword, createUser)
  .delete(deleteUser, checkId)
  .put(checkLoginAndPassword, updateUser);

// app.route('/api/v1/user/login').post();
// app.route('/api/v1/user/logout').post();




app.listen(PORT, HOST, () => {
  console.log('Server listen on port: '  + PORT);
});