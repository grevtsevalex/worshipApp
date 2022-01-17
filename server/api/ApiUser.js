const User = require('../models/User');

/**
 * Создание нового пользователя.
 * @param {string} login Логин.
 * @param {string} pass  Пароль.
 * @returns Promise<obj>
 */
const createUser = (login, pass) => new User({login, pass}).save();

/**
 * Изменить пользователя.
 * @param {string} id    Идентификатор пользователя.
 * @param {string} login Логин.
 * @param {string} pass  Пароль.
 * @returns Promise<boolean>
 */
const updateUser = (id, login, pass) => User.updateOne({_id: id}, {login, pass});

/**
 * Удаление пользователя.
 * @param {string} id Идентификатор пользователя. 
 * @returns Promise<boolean>
 */
const deleteUser = (id) => User.deleteOne({_id: id});

/**
 * Существует ли пользователь с таким логином.
 * @param string Логин.
 * @returns Promise<boolean>
 */
const isLoginExists = (login) => User.exists({login});

/**
 * Существует ли пользователь.
 * @param string Идентификатор.
 * @returns Promise<boolean>
 */
 const isUserExists = (id) => User.exists({_id: id});

/**
 * Найти пользователя по логину.
 * @param {string} login 
 * @returns Promise<User>
 */
const findUserByLogin = (login) => User.findOne({login});


module.exports = {createUser, updateUser, isLoginExists, deleteUser, findUserByLogin, isUserExists};