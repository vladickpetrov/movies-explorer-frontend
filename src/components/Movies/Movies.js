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

  let button = useRef();

  useEffect(() => {
    setSearchResult(
      "Чтобы увидеть результат, введите в строку поиска название фильма"
    );

    setMovieName(localStorage.getItem("movieName"));
    setIsShort(localStorage.getItem("isShort") === "true");
    if (localStorage.getItem("movieName")) {
      button.current.click();
    }
  }, []);

  useEffect(() => {
    showVisibleCards();
  }, [movies, movieName]);

  let width = window.innerWidth;

  let currentItem = width > 990 ? 12 : width > 768 ? 8 : 5;

  function loadMorePictures() {
    let cards = document.querySelectorAll(".card");

    if (cards.length > currentItem) {
      for (
        let i = 0;
        i < currentItem + (width > 1279 ? 4 : width > 990 ? 3 : 2);
        i++
      ) {
        if (cards.length - currentItem === 2) {
          cards[cards.length - 1].style.display = "flex";
          cards[cards.length - 2].style.display = "flex";
        } else if (cards.length - currentItem === 1) {
          cards[cards.length - 1].style.display = "flex";
        } else {
          cards[i].style.display = "flex";
        }
      }
      currentItem += width > 1279 ? 4 : width > 990 ? 3 : 2;
    }
    checkButton();
  }

  function showVisibleCards() {
    let initialVisibleCards = width > 990 ? 12 : width > 768 ? 8 : 5;

    const cards = document.querySelectorAll(".card");

    if (cards && cards.length !== 0) {
      for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
      }
      if (cards.length >= initialVisibleCards) {
        for (let i = 0; i < initialVisibleCards; i++) {
          cards[i].style.display = "flex";
        }
      } else {
        for (let i = 0; i < cards.length; i++) {
          cards[i].style.display = "flex";
        }
      }
    }
  }

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

  function checkButton() {
    let cards = document.querySelectorAll(".card");

    if (cards && currentItem >= cards.length) {
      setButtonIsShowed(false);
    } else if (cards && currentItem < cards.length) {
      setButtonIsShowed(true);
    }
  }

  window.addEventListener("resize", () => {
    width = window.innerWidth;
    showVisibleCards();
  });

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
        button={button}
        checkButton={checkButton}
        showVisibleCards={showVisibleCards}
      />
      {filterResults(movies)?.length === 0 ? (
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
                      checkButton={checkButton}
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
