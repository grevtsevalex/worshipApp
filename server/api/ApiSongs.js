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
 * Есть ли уже песня с таким содержанием и тегами.
 * @param {string, array} Название песни, тэги.
 * @returns Promise<boolean>
 */
 const hasCommonSong = ({title, tags}) => Song.exists({title, tags: {$all: tags}});

/**
 * Существует ли такая песня.
 * @param {string} id 
 * @returns Promise<boolean>
 */
const isSongExists = (id) => Song.exists({_id: id});

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

 //////////   UPDATE   //////////

/**
 * Обновление песни.
 * @param {string, string, array, string} Идентификатор песни, название, тэги, текст.
 * @returns Promise
 */
const updateSong = ({id, title, tags, text}) => Song.updateOne({_id: id}, {title, tags, text});

module.exports = {
  getSongs,
  getSongByTitle,
  getSongsByTags,
  getSongByText,
  addSong,
  hasCommonSong,
  getSongById,
  deleteSong,
  updateSong,
  isSongExists,
};