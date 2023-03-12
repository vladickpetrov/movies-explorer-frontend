import { useState } from "react";
import { login } from "../../utils/auth";
import { Link } from "react-router-dom";
import "./Login.css";

function Login({ handleLogIn, navigation, setIsPreloaderOpen }) {
  const [email, setEmail] = useState("");
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);

  function checkValidity(e) {
    if (!e.target.validity.valid) {
      setIsButtonActive(false);
      e.target.classList.add("login__input_error");
      setErrorMessage(e.target.validationMessage);
      setIsErrorOpen(true);
    } else {
      setErrorMessage("");
      e.target.classList.remove("login__input_error");
      setIsErrorOpen(false);
    }
  }

  function handleEmailChange(e) {
    const email = e.target.value;
    setEmail(email);
  }

  function handlePasswordChange(e) {
    const password = e.target.value;
    setPassword(password);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsPreloaderOpen(true);
    login(email, password)
      .then((data) => {
        if (data.token) {
          const jwt = data.token;
          localStorage.setItem("jwt", jwt);
          return data;
        }
      })
      .then((res) => {
        handleLogIn();
        navigation("/movies");
      })
      .catch((err) => {
        setIsErrorOpen(true);
        setErrorMessage("Что-то пошло не так... Попробуйте войти позже");
        console.log(err);
      })
      .finally(() => {
        setIsPreloaderOpen(false);
      });
  }

  function handleFormChange(e) {
    checkValidity(e);

    const inputList = Array.from(
      e.target.form.querySelectorAll(".login__input")
    );

    const validInputList = inputList.filter((input) => {
      return input.validity.valid;
    });

    if (inputList.length === validInputList.length) {
      setIsButtonActive(true);
    }
  }

  return (
    <main className="login">
      <Link className="login__logo-link" to="/main">
        <div className="login__logo"></div>
      </Link>
      <h1 className="login__title">Рады видеть!</h1>
      <form
        className="login__form"
        autoComplete="off"
        action="#"
        onSubmit={handleSubmit}
        onChange={handleFormChange}
      >
        <div className="login__input-container">
          <label className="login__label">E-mail</label>
          <input
            type="email"
            className="login__input"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
            maxLength="30"
            minLength="2"
            value={email || ""}
            onChange={handleEmailChange}
          />
        </div>
        <div className="login__input-container">
          <label className="login__label">Пароль</label>
          <input
            className="login__input"
            type="password"
            name="password"
            required
            maxLength="30"
            minLength="2"
            value={password || ""}
            onChange={handlePasswordChange}
          />
        </div>
        <span
          className={`login__error ${
            isErrorOpen ? "login__error_visible" : ""
          }`}
        >
          {errorMessage}
        </span>
        <button
          className={`login__button clearbutton ${
            isButtonActive ? "" : "login__button_inactive"
          }`}
          disabled={!isButtonActive}
        >
          Войти
        </button>
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
