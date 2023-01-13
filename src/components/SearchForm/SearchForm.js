import "./SearchForm.css";

function SearchForm() {
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
            />
          </div>
          <button className="search__button clearbutton"></button>
        </form>
        <div className="search__divider"></div>
        <div className="search__radio-container">
          <input
            className="search__radio"
            type="checkbox"
            id="short"
            name="short"
            value="yes"
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
