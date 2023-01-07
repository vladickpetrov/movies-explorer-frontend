import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="me">
      <h2 className="me_title">Студент</h2>
      <div className="me_container">
        <div className="me_info">
          <div className="me_general">
            <h3 className="me_name">Владислав</h3>
            <span className="me_profession">Веб-разработчик, 20 лет</span>
            <p className="me_text">
              Я родился и вырос в Волхове, живу в Санкт-Петербурге. Отучился три
              курса лечебного факультета. Не выхожу из дома без наушников,
              увлекаюсь спортом и пайкой. Год назад начал кодить, и затянуло.
              Сейчас уверенно погружаюсь в эту сферу.
            </p>
          </div>
          <a className="me_github" href="https://github.com/vladickpetrov">
            Github
          </a>
        </div>
        <div className="me_photo" src="/src/images/IMG_7994.jpg"></div>
      </div>
    </section>
  );
}

export default AboutMe;
