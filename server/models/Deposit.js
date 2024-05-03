const { Schema, model } = require("mongoose");

//таблица пользователей
const Deposit = new Schema({
  sum: { type: Number }, //телефон
  email: { type: String, required: true, unique: true }, //почта
  password: { type: String, required: true }, //пароль
  secretWord: { type: String, required: true }, //секретное слово
  referalCode: { type: String }, //реферальный код
});

module.exports = model("User", User);
