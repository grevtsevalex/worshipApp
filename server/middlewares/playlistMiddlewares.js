const ApiResponse = require('../models/ApiResponse');
const {isPlaylistExists} = require('../api/ApiPlayList');
const {isSongExists} = require('../api/ApiSongs');

const checkPlaylist = async (req, res, next) => {
  const response = new ApiResponse();
  const {songs, playlistId} = req.body;

  if (!songs || !playlistId || !songs.length) {
    response.error = 'Неверныe данные';
    return res.status(400).json(response);
  }

  const songsResults = await Promise.all(songs.map(s => isSongExists(s)))
  .catch(() => {
    response.error = 'Неверные данные песен';
    return res.status(400).json(response);
  });

  if (songsResults.includes(false)) {
    response.error = 'Таких песен не существует';
    return res.status(400).json(response);
  }

  await isPlaylistExists(playlistId)
  .catch(() => {
    response.error = 'Такого плейлиста не существует';
    return res.status(400).json(response);
  });

  next();
};

module.exports = {checkPlaylist};