import { Link } from "react-router-dom";
import "./NavTab.css";

function NavTab() {
  return (
    <header className="nav">
      <Link className="nav__logo-link" to="/">
        <div className="nav__logo"></div>
      </Link>
      <div className="nav__buttons">
        <Link to="/signup">
          <button className="nav__signup clearbutton">Регистрация</button>
        </Link>
        <Link to="/signin">
          <button className="nav__signin clearbutton">Войти</button>
        </Link>
      </div>
    </header>
  );
}

export default NavTab;
