import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isOpen, handleMenuClose }) {
  return (
    <div className={`navigation ${isOpen ? "navigation_visible" : ""} `}>
      <div
        className={`navigation__main-window ${
          isOpen ? "navigation__main-window_visible" : ""
        } `}
      >
        <button
          className="navigation__close-button clearbutton"
          type="button"
          onClick={handleMenuClose}
        ></button>
        <nav className="navigation__menu">
          <NavLink
            className={({ isActive }) =>
              `navigation__link ${isActive ? "navigation__link_active" : ""} `
            }
            to="/main"
            onClick={handleMenuClose}
          >
            Главная
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `navigation__link ${isActive ? "navigation__link_active" : ""} `
            }
            to="/movies"
            onClick={handleMenuClose}
          >
            Фильмы
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `navigation__link ${isActive ? "navigation__link_active" : ""} `
            }
            to="/saved-movies"
            onClick={handleMenuClose}
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <Link
          className="navigation__account"
          to="/profile"
          onClick={handleMenuClose}
        >
          <p className="navigation__account-title">Аккаунт</p>
          <div className="navigation__account-image"></div>
        </Link>
      </div>
      <div
        className={`navigation__background ${
          isOpen ? "navigation__background_visible" : ""
        } `}
      ></div>
    </div>
  );
}

export default Navigation;
