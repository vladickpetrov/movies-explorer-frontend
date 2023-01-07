import "./Techs.css";

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs_title">Технологии</h2>
      <div className="techs_main-container">
        <h3 className="techs_subtitle">7 Технологий</h3>
        <p className="techs_text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs_container">
          <li className="techs_particle">HTML</li>
          <li className="techs_particle">CSS</li>
          <li className="techs_particle">JS</li>
          <li className="techs_particle">React</li>
          <li className="techs_particle">Git</li>
          <li className="techs_particle">Express.js</li>
          <li className="techs_particle">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
