import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../utils/auth";
import "./Register.css";

function Register({ setIsPreloaderOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);

  function handleEmailChange(e) {
    const email = e.target.value;
    setEmail(email);
  }

  function checkValidity(e) {
    if (!e.target.validity.valid) {
      setIsButtonActive(false);
      e.target.classList.add("register__input_error");
      setErrorMessage(e.target.validationMessage);
      setIsErrorOpen(true);
    } else {
      setErrorMessage("");
      e.target.classList.remove("register__input_error");
      setIsErrorOpen(false);
    }
  }

  function handleNameChange(e) {
    const name = e.target.value;
    setName(name);
  }

  function handlePasswordChange(e) {
    const password = e.target.value;
    setPassword(password);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsPreloaderOpen(true);
    register(name, email, password)
      .catch((err) => {
        setIsErrorOpen(true);
        setErrorMessage(
          "Что-то пошло не так... Попробуйте зарегистрироваться позже"
        );
        console.log(err);
      })
      .finally(() => {
        setIsPreloaderOpen(false);
      });
  }

  function handleFormChange(e) {
    checkValidity(e);

    const inputList = Array.from(
      e.target.form.querySelectorAll(".register__input")
    );

    const validInputList = inputList.filter((input) => {
      return input.validity.valid;
    });

    if (inputList.length === validInputList.length) {
      setIsButtonActive(true);
    }
  }

  return (
    <main className="register">
      <Link className="register__logo-link" to="/">
        <div className="register__logo"></div>
      </Link>
      <h1 className="register__title">Добро пожаловать!</h1>
      <form
        className="register__form"
        autoComplete="off"
        action=""
        onSubmit={handleSubmit}
        onChange={handleFormChange}
      >
        <div className="register__input-container">
          <label className="register__label">Имя</label>
          <input
            maxLength="30"
            minLength="2"
            className="register__input"
            name="name"
            required
            value={name || ""}
            onChange={handleNameChange}
          />
        </div>
        <div className="register__input-container">
          <label className="register__label">E-mail</label>
          <input
            className="register__input"
            name="email"
            type="email"
            maxLength="30"
            minLength="2"
            required
            value={email || ""}
            onChange={handleEmailChange}
          />
        </div>
        <div className="register__input-container">
          <label className="register__label">Пароль</label>
          <input
            maxLength="30"
            minLength="2"
            className="register__input"
            type="password"
            name="password"
            required
            value={password || ""}
            onChange={handlePasswordChange}
          />
        </div>
        <span
          className={`register__error ${
            isErrorOpen ? "register__error_visible" : ""
          }`}
        >
          {errorMessage}
        </span>
        <button
          className={`register__button clearbutton ${
            isButtonActive ? "" : "register__button_inactive"
          }`}
          disabled={!isButtonActive}
        >
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
