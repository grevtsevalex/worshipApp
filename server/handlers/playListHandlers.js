const ApiResponse     = require('../models/ApiResponse');
const ApiPlayList     = require('../api/ApiPlayList');
const {isLoginExists} = require('../api/ApiUser');
const {isSongExist}   = require('../api/ApiSongs');

const createPlayList = async (req, res) => {
  const response = new ApiResponse();
  const {songs, author, participates} = req.body;

  if (!songs || !author || !participates || !songs.length || !participates.length) {
    response.error = 'Неверные данные';
    return res.status(400).json(response);
  }

  const results = await Promise.all([author, ...participates].map(i => isLoginExists(i)))
  .catch(() => {
    response.error = 'Неверные данные пользователей';
    return res.status(400).json(response);
  });

  if (results.includes(false)) {
    response.error = 'Неверные данные пользователей';
    return res.status(400).json(response);
  }

  const songsResults = await Promise.all(songs.map(s => isSongExist(s)))
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

module.exports = {createPlayList};