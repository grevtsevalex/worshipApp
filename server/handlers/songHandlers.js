const ApiResponse = require('../models/ApiResponse');
const ApiSongs    = require('../api/ApiSongs');

const getAllSongs = async (req, res) => {
  const response = new ApiResponse();
  response.data  = await ApiSongs.getSongs();

  if (!response.data.length) {
    response.error = 'Песни не найдены.';
    return res.status(404).json(response);
  }

  response.result = true;
  return res.status(200).json(response);
};

const createNewSong = async (req, res) => {
  const response = new ApiResponse();

  if (!req.body.title || !req.body.tags || !req.body.text) {
    response.error = 'Неверный запрос';
    return res.status(400).json(response);
  }

  const isSongExist = await ApiSongs.isSongExist(req.body);

  if (isSongExist) {
    response.error = 'Песня с таким названием и тэгами уже существует';
    return res.status(409).json(response);
  }

  response.result = await ApiSongs.addSong(req.body);
  return res.status(201).json(response);
};

const changeSong = async (req, res) => {
  const response = new ApiResponse();
  console.log(req.body);

  if (!req.body.id) {
    response.error = 'Неверный запрос';
    return res.status(400).json(response);
  }

  const song = await ApiSongs.getSongById(req.body.id);
  console.log(song);
  if (!isSongExist) {
    response.error = 'Такой песни не найдено';
    return res.status(204).json(response); 
  }

  response.result = await ApiSongs.addSong(req.body);
  return res.status(201).json(response);
};


module.exports = {
  getAllSongs,
  createNewSong,
  createNewSong,
  changeSong,
};