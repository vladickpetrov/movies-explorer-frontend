import movieApi from "../../utils/MoviesApi";
import "./SearchForm.css";

function SearchForm({
  setMovies,
  setIsPreloaderOpen,
  setSearchResult,
  setMovieName,
  setIsShort,
  isSaved,
  movieName,
  isShort,
  checkButton,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    if (!isSaved) {
      setIsPreloaderOpen(true);

      localStorage.setItem("movieName", movieName);
      localStorage.setItem("isShort", isShort);

      movieApi
        .getMovies()
        .then((res) => {
          setMovies(res);
          setSearchResult("Ничего не найдено");
          checkButton();
        })
        .catch((err) => {
          setSearchResult(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          );
          console.log(err);
        })
        .finally(() => {
          setIsPreloaderOpen(false);
        });
    }
  }

  function handleTextChange(e) {
    setMovieName(e.target.value);
  }

  function handleRadio(e) {
    setIsShort(e.target.checked);
  }

  return (
    <section className="search">
      <div className="search__container">
        <form action="" className="search__form">
          <div className="search__input-container">
            <div className="search__magni"></div>
            <input
              className="search__input"
              placeholder="Фильм"
              formNoValidate
              required
              value={movieName || ""}
              onChange={handleTextChange}
            />
          </div>
          <button
            className="search__button clearbutton"
            onClick={handleSubmit}
          ></button>
        </form>
        <div className="search__divider"></div>
        <div className="search__radio-container">
          <input
            className="search__radio"
            type="checkbox"
            id="short"
            name="short"
            value="yes"
            checked={isShort || false}
            onChange={handleRadio}
          />
          <label htmlFor="short"></label>
          <p className="search__radio-text">Короткометражки</p>
        </div>
      </div>
      <hr className="search__line" />
    </section>
  );
}

export default SearchForm;
