import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { sendUserInfo } from "../../utils/MainApi";
import QuitPopup from "../QuitPopup/QuitPopup";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import "./Profile.css";

function Profile({ setLoggedIn, setCurrentUser, jwt, setIsPreloaderOpen }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isQuitOpen, setIsQuitOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);

  const currentUser = useContext(CurrentUserContext);
  const navigation = useNavigate();
  useEffect(() => {
    setEmail(currentUser.email);
    setName(currentUser.name);
  }, []);

  function checkValidity(e) {
    if (!e.target.validity.valid) {
      setIsButtonActive(false);
      e.target.classList.add("profile__input_error");
      setErrorMessage(e.target.validationMessage);
      setIsErrorOpen(true);
    } else {
      setErrorMessage("");
      e.target.classList.remove("profile__input_error");
      setIsErrorOpen(false);
    }
  }

  function handleEmailChange(e) {
    const email = e.target.value;
    setEmail(email);
  }

  function handleNameChange(e) {
    const name = e.target.value;
    setName(name);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsPreloaderOpen(true);
    sendUserInfo(jwt, name, email)
      .then((res) => {
        setIsErrorOpen(true);
        setErrorMessage("Данные успешно обновлены");
        setCurrentUser(res);
      })
      .catch((err) => {
        setIsErrorOpen(true);
        setErrorMessage(err.statusText);
        if (err.status === 409) {
          setErrorMessage("Пользователь с таким E-mail уже существует");
        }
        if (err.status === 500) {
          setErrorMessage(
            "Упс... Что-то пошло не так. Попробуйте обновить страницу"
          );
        }
      })
      .finally(() => {
        setIsPreloaderOpen(false);
      });
  }

  function handleQuit() {
    localStorage.removeItem("jwt");
    setCurrentUser({});
    setLoggedIn(false);
    navigation("/main");
  }

  function handleQuitOpen(e) {
    e.preventDefault();
    setIsQuitOpen(true);
  }

  function handleQuitClose() {
    setIsQuitOpen(false);
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
    <div className="profile">
      <QuitPopup
        isQuitOpen={isQuitOpen}
        handleQuitClose={handleQuitClose}
        handleQuit={handleQuit}
      />
      <form
        className="profile__section"
        onChange={handleFormChange}
        onSubmit={handleSubmit}
      >
        <h1 className="profile__title">Привет{name ? `, ${name}` : ""}!</h1>
        <div className="profile__data">
          <div className="profile__container">
            <span className="profile__subtitle">Имя</span>
            <input
              className="profile__input"
              name="name"
              required
              maxLength="30"
              minLength="2"
              autoComplete="off"
              value={name || ""}
              onChange={handleNameChange}
            />
          </div>
          <div className="profile__container">
            <span className="profile__subtitle">E-mail</span>
            <input
              autoComplete="off"
              type="email"
              className="profile__input"
              name="email"
              required
              maxLength="30"
              minLength="2"
              value={email || ""}
              onChange={handleEmailChange}
            />
          </div>
          <span
            className={`profile__error-message ${
              isErrorOpen ? "profile__error_visible" : ""
            }`}
          >
            {errorMessage}
          </span>
          <span className="profile__error-message">{errorMessage}</span>
        </div>
        <button
          className={`profile__edit clearbutton ${
            isButtonActive ? "" : "profile__edit_disabled"
          }`}
          disabled={!isButtonActive}
          formAction="submit"
        >
          Редактировать
        </button>
        <button
          formAction="none"
          className="profile__signout clearbutton"
          onClick={handleQuitOpen}
        >
          Выйти из аккаунта
        </button>
      </form>
    </div>
  );
}

export default Profile;
