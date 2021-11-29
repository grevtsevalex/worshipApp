const Song = require('../models/Song');

//////////   GETTING   //////////

/**
 * Получить все песни.
 * @returns Promise<array>
 */
const getSongs = () => Song.find();

/**
 * Найти песню по идентификатору.
 * @param {string} id Идентификатор песни.
 * @returns Promise<Song>
 */
 const getSongById = (id) => Song.find({_id: id});

/**
 * Найти песню по названию.
 * @param {string} title Название песни.
 * @returns Promise<array>
 */
const getSongByTitle = (title) => Song.find({title});

/**
 * Найти песни по тэгам.
 * @param {array} tags Тэги песни.
 * @returns Promise<array>
 */
const getSongsByTags = (tags) => Song.find({tags: {$all: tags}});

/**
 * Найти песню по словам.
 * @param {string} query Текст запроса.
 * @returns Promise<array>
 */
const getSongByText = (query) => Song.find({$text: {$search: query}});

/**
 * Существует ли такая песня.
 * @param {string, array} Название песни, тэги.
 * @returns Promise<boolean>
 */
 const isSongExist = ({title, tags}) => Song.exists({title, tags: {$all: tags}});

//////////   ADDING   //////////

/**
 * Добавление новой песни.
 * @param {string, array, string} Название песни, тэги, текст.
 * @returns Promise
 */
const addSong = ({title, tags, text}) => new Song({title, text, tags}).save();

//////////   DELETE   //////////

/**
 * Удаление песни.
 * @param {string} id Идентификатор песни.
 * @returns Promise
 */
 const deleteSong = (id) => Song.deleteOne({_id: id});


module.exports = {
  getSongs,
  getSongByTitle,
  getSongsByTags,
  getSongByText,
  addSong,
  isSongExist,
  getSongById,
  deleteSong
};