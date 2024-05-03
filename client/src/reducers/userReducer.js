const SET_USER = "SET_USER"; //создаем событие
const LOGOUT = "LOGOUT";
//состояние пользователя авторизован/нет
//изначально не авторизован
const defaultState = {
  currentUser: {},
  isAuth: false,
};

export default function userReduser(state = defaultState, action) {
  switch (action.type) {
    case SET_USER: //логика события
      return {
        ...state, //возвращаем состояние авторизован/нет
        currentUser: action.payload,
        isAuth: true,
      };

    case LOGOUT: //логика события
      localStorage.removeItem("token");
      return {
        ...state, //возвращаем состояние авторизован/нет
        currentUser: {},
        isAuth: false,
      };
    default:
      return state;
  }
}

//функция, принимающая токен юзера и возвращающая объект юзера с состоянием и данными
export const setUser = (user) => ({ type: SET_USER, payload: user });

export const logout = () => ({ type: LOGOUT });
