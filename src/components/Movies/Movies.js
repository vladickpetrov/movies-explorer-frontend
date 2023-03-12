import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import "./Movies.css";
import MoreButton from "../MoreButton/MoreButton";
import { useEffect, useRef, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function Movies({ setIsPreloaderOpen, jwt, userMovies, setUserMovies }) {
  const [movies, setMovies] = useState([]);
  const [isShort, setIsShort] = useState(false);
  const [searchResult, setSearchResult] = useState("");
  const [movieName, setMovieName] = useState("");
  const [buttonIsShowed, setButtonIsShowed] = useState(true);

  let width = window.innerWidth;

  window.addEventListener("resize", () => {
    width = window.innerWidth;
  });

  let button = useRef();

  useEffect(() => {
    setSearchResult(
      "Чтобы увидеть результат, введите в строку поиска название фильма"
    );

    setMovieName(localStorage.getItem("movieName"));
    setIsShort(localStorage.getItem("isShort") === "true");
    button.current.click();
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

    if (cards && currentItem >= cards.length) {
      setButtonIsShowed(false);
    } else if (cards && currentItem < cards.length) {
      setButtonIsShowed(true);
    }
  }

  return (
    <>
      <SearchForm
        setMovies={setMovies}
        setIsPreloaderOpen={setIsPreloaderOpen}
        setSearchResult={setSearchResult}
        setMovieName={setMovieName}
        setIsShort={setIsShort}
        loadMorePictures={loadMorePictures}
        movieName={movieName}
        isShort={isShort}
        checkButton={checkButton}
        button={button}
      />
      {filterResults(movies).length === 0 ? (
        <p className="list__name">{searchResult}</p>
      ) : (
        <>
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
                      setUserMovies={setUserMovies}
                    />
                  );
                })}
          </MoviesCardList>
          <MoreButton
            loadMorePictures={loadMorePictures}
            buttonIsShowed={buttonIsShowed}
          />
        </>
      )}
      <Footer></Footer>
    </>
  );
}

export default Movies;
