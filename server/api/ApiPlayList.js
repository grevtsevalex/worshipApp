const PlayList = require('../models/PlayList');

/**
 * Создание нового плейлиста.
 * @param {string[]} songs        Массив идентификаторов песен.
 * @param {string}   author       Идентификатор пользователя.
 * @param {string[]} participates Массив идентификаторов пользователей.
 * @returns Promise<obj>
 */
const createPlayList = (songs, author, participates) => new PlayList({songs, author, participates, date: new Date()}).save();


module.exports = {createPlayList};