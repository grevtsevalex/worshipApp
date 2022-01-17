const PlayList = require('../models/PlayList');

/**
 * Создание нового плейлиста.
 * @param {string[]} songs        Массив идентификаторов песен.
 * @param {string}   author       Идентификатор пользователя.
 * @param {string[]} participates Массив идентификаторов пользователей.
 * @returns Promise<obj>
 */
const createPlayList = (songs, author, participates) => new PlayList({songs, author, participates, date: new Date()}).save();

/**
 * Найти все доступные для пользователя плейлисты.
 * @param {string} userId 
 * @returns Promise<Array>
 */
const getUserPlaylists = (userId) => PlayList.find({$or: [{author: userId}, {participates: {$all: [userId]}}]}).populate('songs');

/**
 * Добавить песню в плейлист.
 * @param {string} id Идентификатор плейлиста
 * @param {string[]} songs Список идентификаторов песен.
 * @returns 
 */
const addSongs = (id, songs) => PlayList.updateOne({_id: id}, {$addToSet: {songs: songs}});

/**
 * Существует ли такой плейлист.
 * @param {string} id 
 * @returns Promise<boolean>
 */
 const isPlaylistExists = (id) => PlayList.exists({_id: id});

 /**
 * Удалить песню из плейлиста.
 * @param {string} id Идентификатор плейлиста
 * @param {string[]} songs Список идентификаторов песен.
 * @returns Promise
 */
 const deleteSongs = (id, songs) => PlayList.updateOne({_id: id}, {$pull: {songs: {$in: songs}}});

module.exports = {createPlayList, getUserPlaylists, addSongs, isPlaylistExists, deleteSongs};