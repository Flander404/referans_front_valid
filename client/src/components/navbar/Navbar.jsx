import "./navbar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  //лого + ссылки + бегущая строка
  return (
    <div className="header_nav">
      <div className="nav_bar">
        <NavLink to="status">
          <div className="nav_cont">Cостояние счета</div>
        </NavLink>

        <NavLink to="history">
          <div className="nav_cont">История транзакций</div>
        </NavLink>
        <NavLink to="/">
        <div className="nav_cont">Реферальная программа</div>
        </NavLink>
      </div>
    </div>
  );
}
export default NavBar;
