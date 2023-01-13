import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreButton from "../MoreButton/MoreButton";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies() {
  return (
    <>
      <Header></Header>
      <SearchForm></SearchForm>
      <MoviesCardList isSaved={true} />
      <MoreButton />
      <Footer></Footer>
    </>
  );
}

export default SavedMovies;
