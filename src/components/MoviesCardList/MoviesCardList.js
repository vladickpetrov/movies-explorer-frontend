import "./MoviesCardList.css";

function MoviesCardList(props) {
  return (
    <section className="card-section">
      <ul className="card-list">{props.children}</ul>
    </section>
  );
}

export default MoviesCardList;
