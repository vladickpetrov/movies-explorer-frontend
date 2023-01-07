import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio_title">Потрфолио</h2>
      <div className="portfolio_container">
        <div className="portfolio_particle">
          <a className="portfolio_link" href="#">
            Статичный сайт
          </a>
          <span className="portfolio_arrow">&#8599;</span>
        </div>
        <div className="portfolio_particle">
          <a className="portfolio_link" href="#">
            Адаптивный сайт
          </a>
          <span className="portfolio_arrow">&#8599;</span>
        </div>
        <div className="portfolio_particle">
          <a className="portfolio_link" href="#">
            Одностраничное приложение
          </a>
          <span className="portfolio_arrow">&#8599;</span>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
