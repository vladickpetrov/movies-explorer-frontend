import { Link } from "react-router-dom";
import "./Header.css";

function Header({ handleMenuOpen }) {
  return (
    <header className="header">
      <Link className="header__logo-link" to="/main">
        <div className="header__logo"></div>
      </Link>
      <div className="header__buttons">
        <Link className="header__signup clearbutton" to="/movies">
          Фильмы
        </Link>
        <Link className="header__signin clearbutton" to="/saved-movies">
          Сохранённые фильмы
        </Link>
      </div>
      <Link className="header__account" to="/profile">
        <p className="header__account-title">Аккаунт</p>
        <div className="header__account-image"></div>
      </Link>
      <button
        className="header__menu-button clearbutton"
        onClick={handleMenuOpen}
      ></button>
    </header>
  );
}

export default Header;
