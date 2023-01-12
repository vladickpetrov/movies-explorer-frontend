import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";
import MoreButton from "../MoreButton/MoreButton";
import Navigation from "../Navigation/Navigation";

function Movies() {
  return (
    <>
      <Navigation></Navigation>
      <Header />
      <SearchForm />
      <MoviesCardList isSaved={false} />
      <MoreButton />
      <Footer />
    </>
  );
}

export default Movies;
