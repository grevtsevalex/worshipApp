const ApiResponse = require('../models/ApiResponse');
const ApiSongs    = require('../api/ApiSongs');

/** Getting all/one song(s). */
const getAllSongs = async (req, res) => {
  const response = new ApiResponse();
  
  if (req.query.id) {
    try {
      response.data  = await ApiSongs.getSongById(req.query.id);
    }
    catch(e) {
      response.error = e.message;
      return res.status(400).json(response);
    }

    response.result = true;
    return res.status(200).json(response);
  }

  try {
    response.data = await ApiSongs.getSongs();
  }
  catch(e) {
    response.error = e.message;
    return res.status(400).json(response);
  }

  if (!response.data.length) {
    response.error = 'Песни не найдены.';
    return res.status(404).json(response);
  }

  response.result = true;
  return res.status(200).json(response);
};

/** Add new song. */
const createNewSong = async (req, res) => {
  const response = new ApiResponse();

  if (!req.body.title || !req.body.tags || !req.body.text) {
    response.error = 'Неверный запрос';
    return res.status(400).json(response);
  }

  let isSongExist = true;

  try {
    isSongExist = await ApiSongs.isSongExist(req.body);
  }
  catch(e) {
    response.error = e.message;
    return res.status(400).json(response);
  }

  if (isSongExist) {
    response.error = 'Песня с таким названием и тэгами уже существует';
    return res.status(409).json(response);
  }

  try {
    response.result = await ApiSongs.addSong(req.body);
  }
  catch(e) {
    response.error = e.message;
    return res.status(400).json(response);
  }

  return res.status(201).json(response);
};

/** Change song. */
const changeSong = async (req, res) => {
  const response = new ApiResponse();

  if (!req.query.id || !req.body.title || !req.body.tags || !req.body.text) {
    response.error = 'Неверный запрос';
    return res.status(400).json(response);
  }

  try {
    await ApiSongs.updateSong(Object.assign({id: req.query.id}, {...req.body}));
  }
  catch(e) {
    response.error = e.message;
    return res.status(400).json(response);
  }

  response.result = true;
  return res.status(201).json(response);
};

/** Delete song. */
const deleteSong = async (req, res) => {
  const response = new ApiResponse();
  
  try {
    response.result = await ApiSongs.deleteSong(req.query.id);
  }
  catch(e) {
    response.error = e.message;
    return res.status(400).json(response);
  }

  if (!response.result) {
    response.error = 'Песня не найдена';
    return res.status(404).json(response);
  }

  return res.status(204).json(response);
}

module.exports = {
  getAllSongs,
  createNewSong,
  createNewSong,
  changeSong,
  deleteSong,
};