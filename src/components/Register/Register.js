import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <main className="register">
      <Link className="register__logo-link" to="/">
        <div className="register__logo"></div>
      </Link>
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form">
        <div className="register__input-container">
          <label className="register__label">Имя</label>
          <input
            maxLength="30"
            minLength="2"
            className="register__input"
            name="name"
            required
          />
        </div>
        <div className="register__input-container">
          <label className="register__label">E-mail</label>
          <input
            className="register__input"
            name="email"
            type="email"
            required
          />
        </div>
        <div className="register__input-container">
          <label className="register__label">Пароль</label>
          <input
            maxLength="30"
            minLength="2"
            className="register__input register__input_error"
            type="password"
            name="password"
            required
          />
        </div>
        <span className="register__error register__error_visible">
          Что-то пошло не так...
        </span>
        <button className="register__button clearbutton">
          Зарегистрироваться
        </button>
        <p className="register__text">
          Уже зарегистрированы?
          <Link to="/signin" className="register__link">
            Войти
          </Link>
        </p>
      </form>
    </main>
  );
}

export default Register;
