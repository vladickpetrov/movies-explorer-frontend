import "./Techs.css";

function Techs() {
  return (
    <section className="techs" id="Techs">
      <h2 className="techs__title">Технологии</h2>
      <div className="techs__main-container">
        <h3 className="techs__subtitle">7 Технологий</h3>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__container">
          <li className="techs__particle">HTML</li>
          <li className="techs__particle">CSS</li>
          <li className="techs__particle">JS</li>
          <li className="techs__particle">React</li>
          <li className="techs__particle">Git</li>
          <li className="techs__particle">Express.js</li>
          <li className="techs__particle">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
