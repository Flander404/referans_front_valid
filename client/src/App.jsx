import React, { useEffect } from "react";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import PartnerAcc from "./components/user/acc/Acc";
import Status from "./components/user/status/Status";
import History from "./components/user/history/History";

import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FormReg from "./components/authorization/FormReg";
import FormLog from "./components/authorization/FormLog";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./components/action/user";

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  //Записываем в переменную значение переменной, которая отвечает за авторизацию(тру/фолс)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, []);

  return (
    <BrowserRouter>
      <Header></Header>

      {/* маршрут с роутами отрабатывает только при неавторизованном пользователе */}
      {!isAuth && (
        <div>
          <Home />
          <Routes>
            <Route path="registration" element={<FormReg />}></Route>
            <Route path="login" element={<FormLog />}></Route>
          </Routes>
        </div>
      )}
      {isAuth && (
        <div>
          <NavBar></NavBar>

          <Routes path="acc">
            <Route path="acc" element={<PartnerAcc />}></Route>
            <Route path="history" element={<History />}></Route>
            <Route path="status" element={<Status />}></Route>
          </Routes>
        </div>
      )}

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
