import "./QuitPopup.css";

function QuitPopup({ isQuitOpen, handleQuitClose, handleQuit }) {
  return (
    <div className={`quit ${isQuitOpen ? "quit_visible" : ""} `}>
      <div className="quit__main-window">
        <h3 className="quit__title">Выйти из аккаунта?</h3>
        <div className="quit__container">
          <button
            className="quit__button clearbutton"
            onClick={handleQuitClose}
          >
            Закрыть
          </button>
          <button
            className="quit__button quit__button_signout clearbutton"
            onClick={handleQuit}
          >
            Выйти
          </button>
        </div>
      </div>
      <div className="quit__background" onClick={handleQuitClose}></div>
    </div>
  );
}

export default QuitPopup;
