const express     = require('express');
const app         = express();
const ApiSongs    = require('./api/ApiSongs');
const ApiResponse = require('./models/ApiResponse');

const HOST = '127.0.0.1';
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.route('/api/v1/songs')
  .get(async (req, res) => {
    const response = new ApiResponse();
    response.data  = await ApiSongs.getSongs();

    if (!response.data.length) {
      response.error = 'Песни не найдены.';
      return res.status(404).json(response);
    }

    response.result = true;
    return res.status(200).json(response);
  })
  .post(async (req, res) => {
    const response = new ApiResponse();
    console.log(req.body);

    if (!req.body.title || !req.body.tags || !req.body.text) {
      response.error = 'Неверный запрос';
      return res.status(400).json(response);
    }

    const isSongExist = await(ApiSongs.isSongExist(req.body));

    if (isSongExist) {
      response.error = 'Песня с таким названием и тэгами уже существует';
      return res.status(409).json(response);
    }

    response.result = await ApiSongs.addSong(req.body);
    return res.status(201).json(response);
  })

app.listen(PORT, HOST, () => {
  console.log('Server listen on port: '  + PORT);
});