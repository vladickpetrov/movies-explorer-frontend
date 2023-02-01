import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import "./Movies.css";
import MoreButton from "../MoreButton/MoreButton";
import { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function Movies({ setIsPreloaderOpen, jwt, userMovies }) {
  const [movies, setMovies] = useState([]);
  const [isShort, setIsShort] = useState(false);
  const [searchResult, setSearchResult] = useState("");
  const [movieName, setMovieName] = useState("");

  let width = window.innerWidth;

  window.addEventListener("resize", () => {
    width = window.innerWidth;
  });

  useEffect(() => {
    setSearchResult(
      "Чтобы увидеть результат, введите в строку поиска название фильма"
    );
  }, []);

  function filterResults(list) {
    return isShort
      ? list.filter((item) => {
          return (
            (item.nameRU.toLowerCase().includes(movieName.toLowerCase()) ||
              item.nameEN.toLowerCase().includes(movieName.toLowerCase())) &&
            item.duration <= 40
          );
        })
      : list.filter((item) => {
          return (
            item.nameRU.toLowerCase().includes(movieName.toLowerCase()) ||
            item.nameEN.toLowerCase().includes(movieName.toLowerCase())
          );
        });
  }

  let currentItem = width > 990 ? 12 : width > 768 ? 8 : 5;

  function loadMorePictures() {
    let cards = document.querySelectorAll(".card");

    checkButton();

    if (cards.length > currentItem) {
      for (
        let i = currentItem;
        i < currentItem + (width > 1279 ? 4 : width > 990 ? 3 : 2);
        i++
      ) {
        cards[i].style.display = "flex";
      }
      currentItem += width > 1279 ? 4 : width > 990 ? 3 : 2;
      checkButton();
    }
  }

  function checkButton() {
    let cards = document.querySelectorAll(".card");

    const button = document.querySelector(".more-button");

    if (cards && currentItem >= cards.length) {
      button.style.display = "none";
    } else if (cards && currentItem < cards.length) {
      button.style.display = "flex";
    }
  }

  return (
    <>
      <SearchForm
        setMovies={setMovies}
        movies={movies}
        setIsPreloaderOpen={setIsPreloaderOpen}
        setSearchResult={setSearchResult}
        setMovieName={setMovieName}
        setIsShort={setIsShort}
        loadMorePictures={loadMorePictures}
      />
      {filterResults(movies).length === 0 ? (
        <p className="list__name">{searchResult}</p>
      ) : (
        <MoviesCardList>
          {filterResults(movies).length === 0
            ? ""
            : filterResults(movies).map((item) => {
                return (
                  <MoviesCard
                    key={item.id}
                    card={item}
                    isSaved={false}
                    isLikedAlready={true}
                    jwt={jwt}
                    userMovies={userMovies}
                  />
                );
              })}
        </MoviesCardList>
      )}
      <MoreButton loadMorePictures={loadMorePictures} />
      <Footer></Footer>
    </>
  );
}

export default Movies;
