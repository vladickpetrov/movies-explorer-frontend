import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Потрфолио</h2>
      <div className="portfolio__container">
        <div className="portfolio__particle">
          <a
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
            href="https://github.com/vladickpetrov/how-to-learn"
          >
            Статичный сайт
          </a>
          <span className="portfolio__arrow">&#8599;</span>
        </div>
        <div className="portfolio__particle">
          <a
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
            href="https://github.com/vladickpetrov/russian-travel"
          >
            Адаптивный сайт
          </a>
          <span className="portfolio__arrow">&#8599;</span>
        </div>
        <div className="portfolio__particle">
          <a
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
            href="https://github.com/vladickpetrov/react-mesto-api-full"
          >
            Одностраничное приложение
          </a>
          <span className="portfolio__arrow">&#8599;</span>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
