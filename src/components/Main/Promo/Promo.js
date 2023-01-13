import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__banner">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <div className="promo__buttons">
          <a className="promo__button clearbutton" href="#Project">
            О проекте
          </a>
          <a className="promo__button clearbutton" href="#Techs">
            Технологии
          </a>
          <a className="promo__button clearbutton" href="#Student">
            Студент
          </a>
        </div>
      </div>
    </section>
  );
}

export default Promo;
