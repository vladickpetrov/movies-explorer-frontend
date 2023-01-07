import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <div className="promo_banner">
        <h1 className="promo_title">
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <div className="promo_buttons">
          <button className="promo_button clearbutton">О проекте</button>
          <button className="promo_button clearbutton">Технологии</button>
          <button className="promo_button clearbutton">Студент</button>
        </div>
      </div>
    </section>
  );
}

export default Promo;
