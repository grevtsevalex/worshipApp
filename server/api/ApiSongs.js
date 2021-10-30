const Song = require('../models/Song');

/**
 * Получить все песни.
 * @returns array
 */
const getSongs = () => Song.find();

/**
 * Найти песню по названию.
 * @param {string} title Название песни.
 * @returns array
 */
const getSongByTitle = (title) => Song.find({title});

/**
 * Найти песни по тэгам.
 * @param {array} tags Тэги песни.
 * @returns array
 */
const getSongsByTags = (tags) => Song.find({tags: {$all: tags}});

/**
 * Найти песню по тексту.
 * @param {string} query Текст запроса.
 * @returns array
 */
const getSongByText = (query) => Song.find({$text: {$search: query}});