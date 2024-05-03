import axios from "axios";
import { setUser } from "../../reducers/userReducer";
import { API_URL } from "../../config";
export const registration = async (
  tel,
  email,
  password,
  secretWord,
  referalCode
) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/registration`, {
      tel,
      email,
      password,
      secretWord,
      referalCode,
    });
    alert(response.data.message);
  } catch (e) {
    alert(e.response.data.message);
  }
};

export const login = (tel, email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, {
        tel,
        email,
        password,
      });
      console.log(response.data.token);
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
      //получаем нашего юзера и переменную, которая показывает, авторизован ли пользовател
      //локальное хранилище для токена, чтобы при обновлении страницы не слетала авторизация
    } catch (e) {
      alert(e.response.data.message);
    }
  };
};

export const auth = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/api/auth/auth`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      dispatch(setUser(response.data));
      localStorage.setItem("token", response.data.token);
      //получаем нашего юзера и переменную, которая показывает, авторизован ли пользователь

      //локальное хранилище для токена, чтобы при обновлении страницы не слетала авторизация
    } catch (e) {
      localStorage.removeItem("token");
    }
  };
};

export const getUserInfo = () => {
 return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/api/auth/me`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      dispatch(setUser(response.data.user));
    } catch (e) {
      console.error(e);
      // Обработка ошибок, например, удаление токена из локального хранилища, если запрос не удался
      localStorage.removeItem("token");
    }
  };
};
