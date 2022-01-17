const ApiResponse    = require('../models/ApiResponse');
const ApiPlayList    = require('../api/ApiPlayList');

const createPlayList = async (req, res) => {
  const response = new ApiResponse();
  const {songs, author, participates} = req.body;

  if (!songs || !author || !participates || !songs.length || !participates.length) {
    response.error = 'Неверные данные';
    return res.status(400).json(response);
  }

  const results = await Promise.all([author, ...participates].map(i => isUserExists(i)))
  .catch(() => {
    response.error = 'Неверные данные пользователей';
    return res.status(400).json(response);
  });

  if (results.includes(false)) {
    response.error = 'Неверные данные пользователей';
    return res.status(400).json(response);
  }

  const songsResults = await Promise.all(songs.map(s => isSongExists(s)))
  .catch(() => {
    response.error = 'Неверные данные песен';
    return res.status(400).json(response);
  });

  if (songsResults.includes(false)) {
    response.error = 'Неверные данные песен';
    return res.status(400).json(response);
  }

  response.data = await ApiPlayList.createPlayList(songs, author, participates).catch(e => {
    response.error = e;
    return res.status(400).json(response);
  });

  response.result = true;
  return res.status(200).json(response);
};

const getUserPlaylists = async (req, res) => {
  const response = new ApiResponse();

  if (!req.query.userId) {
    response.error = 'Неверный идентификатор пользователя';
    return res.status(400).json(response);
  }

  response.data = await ApiPlayList.getUserPlaylists(req.query.userId)
  .catch(e => {
    response.error = e;
    return res.status(400).json(response);
  });

  response.result = true;
  return res.status(200).json(response);
};

const addSongs = async (req, res) => {
  const response = new ApiResponse();
  const {songs, playlistId} = req.body;

  const result = await ApiPlayList.addSongs(playlistId, songs)
  .catch(() => {
    response.error = 'Не удалось добавить песни в плейлист';
    return res.status(400).json(response);
  });

  response.result = true;
  response.data = result;
  return res.status(204).json(response);
};

const deleteSongs = async (req, res) => {
  const response = new ApiResponse();
  const {songs, playlistId} = req.body;

  const result = await ApiPlayList.deleteSongs(playlistId, songs)
  .catch(() => {
    response.error = 'Не удалось удалить песни';
    return res.status(400).json(response);
  });

  response.result = true;
  response.data = result;
  return res.status(204).json(response);
};

module.exports = {createPlayList, getUserPlaylists, addSongs, deleteSongs};