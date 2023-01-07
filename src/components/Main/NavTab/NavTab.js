import "./NavTab.css";

function NavTab() {
  return (
    <header className="nav">
      <a className="nav_logo-link" href="#">
        <div className="nav_logo"></div>
      </a>
      <div className="nav_buttons">
        <button className="nav_signup clearbutton">Регистрация</button>
        <button className="nav_signin clearbutton">Войти</button>
      </div>
    </header>
  );
}

export default NavTab;
