const ApiResponse = require('../models/ApiResponse');
const ApiPlayList = require('../api/ApiPlayList');


const createPlayList = async (req, res) => {
  const response = new ApiResponse();
  const {songs, author, participates} = req.body;

  if (!songs || !author || !participates || !songs.length || !participates.length) {
    response.error = 'Неверные данные';
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