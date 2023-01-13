import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="project" id="Project">
      <h2 className="project__title">О проекте</h2>
      <div className="project__info-container">
        <div className="project__info">
          <h3 className="project__info-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="project__info">
          <h3 className="project__info-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="project__progress-container">
        <div className="project__bar-container project__bar-container_backend">
          <h4 className="project__bar-title project__bar-title_backend">
            1 неделя
          </h4>
          <h5 className="project__bar-subtitle">Back-end</h5>
        </div>
        <div className="project__bar-container project__bar-container_frontend">
          <h4 className="project__bar-title project__bar-title_frontend">
            4 недели
          </h4>
          <h5 className="project__bar-subtitle">Front-end</h5>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
