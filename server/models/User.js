const { Schema, model } = require("mongoose");

//таблица пользователей
const User = new Schema({
  tel: { type: String, required: true, unique: true }, //телефон
  email: { type: String, required: true, unique: true }, //почта
  password: { type: String, required: true }, //пароль
  secretWord: { type: String, required: true }, //секретное слово
  referalCode: { type: String }, //реферальный код
});

module.exports = model("User", User);
