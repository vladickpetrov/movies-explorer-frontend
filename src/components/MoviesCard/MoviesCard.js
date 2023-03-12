import { useEffect, useState } from "react";
import { deleteMovie, sendMovie } from "../../utils/MainApi";
import "./MoviesCard.css";

function MoviesCard({
  card,
  isSaved,
  jwt,
  userMovies,
  setUserMovies,
  checkButton,
}) {
  const movieLink = isSaved
    ? card.image
    : `https://api.nomoreparties.co${card.image.url}`;

  const thumbnailLink = isSaved
    ? `https://api.nomoreparties.co${card.thumbnail}`
    : `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`;

  const [isLiked, setIsLiked] = useState(false);
  const [cardId, setCardId] = useState(false);
  const [cardStyle, setCardStyle] = useState({});

  useEffect(() => {
    if (userMovies.find((i) => i.movieId === card.id)?.movieId === card.id) {
      setIsLiked(true);
    }

    if (isSaved) {
      setCardStyle({ display: "flex" });
    }
    checkButton();
  }, []);

  function handleLike() {
    if (isLiked) {
      setIsLiked(false);
      deleteMovie(
        jwt,
        cardId || userMovies?.find((i) => i.movieId === card.id)._id
      )
        .then(() => {
          setIsLiked(false);
          setUserMovies(userMovies.filter((a) => a.movieId !== card.id));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setIsLiked(true);
      sendMovie(jwt, {
        country: card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: movieLink,
        trailer: card.trailerLink,
        thumbnail: thumbnailLink,
        movieId: card.id,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
      })
        .then((res) => {
          setCardId(res._id);
          setUserMovies((userMovies) => [...userMovies, res]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleDelete() {
    deleteMovie(jwt, card._id)
      .then(() => {
        setUserMovies(userMovies.filter((a) => a.movieId !== card.movieId));
        setCardStyle({ display: "none" });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <li className="card" style={cardStyle}>
      <a
        href={isSaved ? card.trailer : card.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img className="card__image" src={movieLink} alt={card.nameRU} />
      </a>
      <div className="card__title-container">
        <h2 className="card__title">{card.nameRU}</h2>
        {isSaved ? (
          <button
            onClick={handleDelete}
            className={"clearbutton card__button card__delete"}
          ></button>
        ) : (
          <button
            onClick={handleLike}
            className={`clearbutton card__button card__like ${
              isLiked ? "card__like_active" : ""
            }`}
          ></button>
        )}
      </div>
      <span className="card__timer">{`${
        parseInt(card.duration / 60) === 0
          ? ""
          : parseInt(card.duration / 60) + "ч"
      } ${card.duration % 60 === 0 ? "" : (card.duration % 60) + "м"}`}</span>
    </li>
  );
}

export default MoviesCard;
