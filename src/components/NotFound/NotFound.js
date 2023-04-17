import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <div className="not-found__little-container">
          <h1 className="not-found__title">404</h1>
          <span className="not-found__subtitle">Страница не найдена</span>
        </div>
        <Link to="/main" className="not-found__link">
          Назад
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
