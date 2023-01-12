import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="me" id="Student">
      <h2 className="me__title">Студент</h2>
      <div className="me__container">
        <div className="me__info">
          <div className="me__general">
            <h3 className="me__name">Владислав</h3>
            <span className="me__profession">Веб-разработчик, 20 лет</span>
            <p className="me__text">
              Я родился и вырос в Волхове, живу в Санкт-Петербурге. Отучился три
              курса лечебного факультета. Не выхожу из дома без наушников,
              увлекаюсь спортом и пайкой. Год назад начал кодить, и затянуло.
              Сейчас уверенно погружаюсь в эту сферу.
            </p>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            className="me__github"
            href="https://github.com/vladickpetrov"
          >
            Github
          </a>
        </div>
        <div className="me__photo" src="/src/images/IMG_7994.jpg"></div>
      </div>
    </section>
  );
}

export default AboutMe;
