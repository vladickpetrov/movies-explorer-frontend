import "./MoviesCard.css";

function MoviesCard({ name, link, isLiked, isSaved }) {
  return (
    <li className="card">
      <img className="card__image" src={link} alt={name} />
      <div className="card__title-container">
        <h2 className="card__title">{name}</h2>
        <div
          className={
            isSaved
              ? "card__button card__delete"
              : `card__button card__like ${isLiked ? "card__like_active" : ""}`
          }
        ></div>
      </div>
      <span className="card__timer">1ч 42м</span>
    </li>
  );
}

export default MoviesCard;
