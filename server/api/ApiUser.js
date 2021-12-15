const User = require('../models/User');

/**
 * Создание нового пользователя.
 * @param {string, string} Логин, пароль.
 * @returns Promise<obj>
 */
const createUser = ({login, pass}) => new User({login, pass}).save();

/**
 * Изменение пользователя.
 * @param {string, string} Идентификатор, логин, пароль.
 * @returns Promise<boolean>
 */
const updateUser = ({id, login, pass}) => User.updateOne({_id: id}, {login, pass});

/**
 * Существует ли пользователь с таким логином.
 * @param string Логин.
 * @returns Promise<boolean>
 */
 const isLoginExists = (login) => User.exists({login});


module.exports = {createUser, updateUser, isLoginExists};