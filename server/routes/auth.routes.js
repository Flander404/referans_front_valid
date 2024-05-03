const Router = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const authMiddleware = require("../middleware/auth.middleware");
const router = new Router();

//метод регистрации
router.post(
  "/registration",
  [
    check("tel", "Некорректный номер телефона").isLength({ min: 11, max: 11 }),
    check("email", "Некоректный адрес электронной почты").isEmail(), //валидность почты
    check("password", "Пароль должен содержать от 6 до 15 символов").isLength({
      min: 6,
      max: 15,
    }), //пароль от 6 символов до 15
    check(
      "secretWord",
      "Секретное слово должно содержать от 4 до 20 символов"
    ).isLength({ min: 4, max: 20 }),
    check("referalCode", "Реферальный код содержит 6 символов").isLength({
      min: 0,
      max: 6,
    }),
  ],

  //ассинхронная функция запрос-ответ к серверу
  async (req, res) => {
    try {
      //если данные не валидны, записываем ошибку и выводим ее
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Некорректный запрос", errors });
      }

      //тело запроса состоит из email и пассворда !!!потом подключить ключевое слово, реф код и тп
      const { tel, email, password, secretWord, referalCode } = req.body;
      const candidate_email = await User.findOne({ email }); //ищем по емейлу в таблице пользователя

      //если пользователь найден, значит он уже зарегистрирован
      if (candidate_email) {
        return res
          .status(400)
          .json({
            message: `Пользователь с почтой ${email} уже зарегистрирован`,
          });
      }

      //если пользователя нет, то шифруем пароль
      const hashPassword = await bcrypt.hash(password, 5);

      //передаем емейл и пароль в зашифрованном виде переменной user
      const user = new User({
        tel,
        email,
        password: hashPassword,
        secretWord,
        referalCode,
      });

      //сохраняем переменную user в бд
      await user.save();

      //присылаем ответ от сервера о том, что регистрация прошла успешно
      return res.json({ message: "Аккаунт создан" });
    } catch (e) {
      //если произойдет ошибка, вернем от сервера сообщение и тип ошибки
      console.log(e);
      res.send({ message: "Ошибка сервера" });
    }
  }
);

//метод авторизации
router.post(
  "/login",
  [check("tel", "Некорректный номер телефона").isLength({ min: 11, max: 11 })],

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Некорректный запрос", errors });
      }
      //формирование тела запроса к серверу
      const { tel, email, password } = req.body;
      //поиск полбзователя по емайлу
      const user = await User.findOne({ email });

      //если нет пользователя
      if (!user) {
        return res.status(404).json({ message: "Пользователь не найден" });
      }

      //если нашли пользователя сравниваем пароль
      const isPassValid = bcrypt.compareSync(password, user.password);

      //если пароли не совпадают - возвращаем ответом ошибку
      if (!isPassValid) {
        return res
          .status(400)
          .json({ message: "Неправильный пароль или номер телефона" });
      }
      //return res.status(200).json({message:`Пользователь ${user.email} вошел в систему`})
      //создание токена
      const token = jwt.sign({ id: user.id }, config.get("secretKey"), {
        expiresIn: "1h",
      });
      //возвращаем токен на клиента
      return res.json({
        token,
        user: {
          id: user.id,

          tel: user.tel,
          email: user.email,
        },
      });
    } catch (e) {
      console.log(e);
      res.send({ message: "Server error" });
    }
  }
);

router.get("/auth", authMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id }); //получение юзера по id , который достали из токена
    //создание токена
    const token = jwt.sign({ id: user.id }, config.get("secretKey"), {
      expiresIn: "1hour",
    });
    //возвращаем токен на клиента
    return res.json({
      token,
      user: {
        id: user.id,

        tel: user.tel,
        email: user.email,
      },
    });
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error" });
  }
});

// GET запрос для получения информации о пользователе
router.get("/me", authMiddleware, async (req, res) => {
    try {
       // Получение ID пользователя из токена
       const userId = req.user.id;
       // Поиск пользователя в базе данных по ID
       const user = await User.findById(userId);
       // Если пользователь не найден, возвращаем ошибку
       if (!user) {
         return res.status(404).json({ message: "Пользователь не найден" });
       }
       // Возвращаем информацию о пользователе
       return res.json({
         user: {
           id: user.id,
           tel: user.tel,
           email: user.email,
           // Добавьте здесь другие поля, которые вы хотите вернуть
         },
       });
    } catch (e) {
       console.log(e);
       res.send({ message: "Server error" });
    }
   });
module.exports = router;
