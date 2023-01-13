import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Потрфолио</h2>
      <ul className="portfolio__container">
        <li className="portfolio__particle">
          <a
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
            href="https://github.com/vladickpetrov/how-to-learn"
          >
            Статичный сайт
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
            href="https://github.com/vladickpetrov/how-to-learn"
          >
            <span className="portfolio__arrow">&#8599;</span>
          </a>
        </li>
        <li className="portfolio__particle">
          <a
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
            href="https://github.com/vladickpetrov/russian-travel"
          >
            Адаптивный сайт
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
            href="https://github.com/vladickpetrov/russian-travel/"
          >
            <span className="portfolio__arrow">&#8599;</span>
          </a>
        </li>
        <li className="portfolio__particle">
          <a
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
            href="https://github.com/vladickpetrov/react-mesto-api-full/"
          >
            Одностраничное приложение
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
            href="https://github.com/vladickpetrov/react-mesto-api-full/"
          >
            <span className="portfolio__arrow">&#8599;</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
