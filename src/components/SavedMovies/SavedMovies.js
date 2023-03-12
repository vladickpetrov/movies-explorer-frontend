import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function SavedMovies({
  setIsPreloaderOpen,
  userMovies,
  jwt,
  setUserMovies,
  checkButton,
}) {
  const [isShort, setIsShort] = useState(false);
  const [movieName, setMovieName] = useState("");

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

  return (
    <>
      <SearchForm
        setIsPreloaderOpen={setIsPreloaderOpen}
        setMovieName={setMovieName}
        setIsShort={setIsShort}
        isSaved={true}
        movieName={movieName}
        isShort={isShort}
      />
      <MoviesCardList>
        {filterResults(userMovies).length === 0
          ? ""
          : filterResults(userMovies).map((item) => {
              return (
                <MoviesCard
                  key={item.movieId}
                  card={item}
                  isSaved={true}
                  jwt={jwt}
                  userMovies={userMovies}
                  setUserMovies={setUserMovies}
                  checkButton={checkButton}
                />
              );
            })}
      </MoviesCardList>
      <Footer></Footer>
    </>
  );
}

export default SavedMovies;
