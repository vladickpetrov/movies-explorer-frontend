import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h4 className="footer_title footer_text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h4>
      <div className="footer_container">
        <p className="footer_year footer_text">
          &copy; {`${new Date().getFullYear()}`}
        </p>
        <div className="footer_links">
          <a className="footer_link footer_text" href="#">
            Яндекс.Практикум
          </a>
          <a className="footer_link footer_text" href="#">
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
