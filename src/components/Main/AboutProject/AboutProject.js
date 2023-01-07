import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="project">
      <h2 className="project_title">О проекте</h2>
      <div className="project_info-container">
        <div className="project_info">
          <h3 className="project_info-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="project_text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="project_info">
          <h3 className="project_info-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="project_text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="project_progress-container">
        <div className="project_bar-container project_bar-container__backend">
          <h4 className="project_bar-title project_bar-title__backend">
            1 неделя
          </h4>
          <h5 className="project_bar-subtitle">Back-end</h5>
        </div>
        <div className="project_bar-container project_bar-container__frontend">
          <h4 className="project_bar-title project_bar-title__frontend">
            4 недели
          </h4>
          <h5 className="project_bar-subtitle">Front-end</h5>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
