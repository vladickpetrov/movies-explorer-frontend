import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h4 className="footer__title footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h4>
      <div className="footer__container">
        <p className="footer__year footer__text">
          &copy; {`${new Date().getFullYear()}`}
        </p>
        <div className="footer__links">
          <a
            target="_blank"
            rel="noreferrer"
            className="footer__link footer__text"
            href="https://practicum.yandex.ru"
          >
            Яндекс.Практикум
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="footer__link footer__text"
            href="https://github.com"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
