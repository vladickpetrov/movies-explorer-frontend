import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <main className="login">
      <Link className="login__logo-link" to="/">
        <div className="login__logo"></div>
      </Link>
      <h1 className="login__title">Рады видеть!</h1>
      <form className="login__form">
        <div className="login__input-container">
          <label className="login__label">E-mail</label>
          <input type="email" className="login__input" name="email" required />
        </div>
        <div className="login__input-container">
          <label className="login__label">Пароль</label>
          <input
            className="login__input"
            type="password"
            name="password"
            required
          />
        </div>
        <span className="login__error">Что-то пошло не так...</span>
        <button className="login__button clearbutton">Войти</button>
        <p className="login__text">
          Ещё не зарегистрированы?
          <Link to="/signup" className="login__link">
            Регистрация
          </Link>
        </p>
      </form>
    </main>
  );
}

export default Login;
