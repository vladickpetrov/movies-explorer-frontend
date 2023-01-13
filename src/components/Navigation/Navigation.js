import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation__main-window navigation__main-window_visible">
        <button
          className="navigation__close-button clearbutton"
          type="button"
        ></button>
        <nav className="navigation__menu">
          <NavLink
            className={({ isActive }) =>
              `navigation__link ${isActive ? "navigation__link_active" : ""}`
            }
            to="/"
          >
            Главная
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `navigation__link ${isActive ? "navigation__link_active" : ""}`
            }
            to="/movies"
          >
            Фильмы
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `navigation__link ${isActive ? "navigation__link_active" : ""}`
            }
            to="/saved-movies"
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <Link className="navigation__account" to="/profile">
          <p className="navigation__account-title">Аккаунт</p>
          <div className="navigation__account-image"></div>
        </Link>
      </div>
      <div className="navigation__background navigation__background_visible"></div>
    </div>
  );
}

export default Navigation;
