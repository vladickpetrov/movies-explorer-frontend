import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

import picPathFirst from "../../images/movies-examples/pic__COLOR_pic-1.png";
import picPathSecond from "../../images/movies-examples/pic__COLOR_pic-2.png";
import picPathThird from "../../images/movies-examples/pic__COLOR_pic-3.png";
import picPathFourth from "../../images/movies-examples/pic__COLOR_pic-4.png";
import picPathFifth from "../../images/movies-examples/pic__COLOR_pic-5.png";

function MoviesCardList({ isSaved }) {
  return (
    <section className="card-section">
      <ul className="card-list">
        <MoviesCard
          name="33 слова о дизайне"
          link={picPathFirst}
          isLiked={true}
          isSaved={isSaved}
        />
        <MoviesCard
          name="Киноальманах «100 лет дизайна»"
          link={picPathSecond}
          isLiked={false}
          isSaved={isSaved}
        />
        <MoviesCard
          name="В погоне за Бенкси"
          link={picPathThird}
          isLiked={false}
          isSaved={isSaved}
        />
        <MoviesCard
          name="Баския: Взрыв реальности"
          link={picPathFourth}
          isLiked={true}
          isSaved={isSaved}
        />
        <MoviesCard
          name="Бег это свобода"
          link={picPathFifth}
          isLiked={false}
          isSaved={isSaved}
        />
        <MoviesCard
          name="Книготорговцы"
          link={picPathFirst}
          isLiked={true}
          isSaved={isSaved}
        />
        <MoviesCard
          name="Когда я думаю о Германии ночью"
          link={picPathSecond}
          isLiked={false}
          isSaved={isSaved}
        />
        <MoviesCard
          name="Gimme Danger: История Игги и The Stooges"
          link={picPathThird}
          isLiked={true}
          isSaved={isSaved}
        />
        <MoviesCard
          name="Дженис: Маленькая девочка грустит"
          link={picPathFourth}
          isLiked={false}
          isSaved={isSaved}
        />
        <MoviesCard
          name="Соберись перед прыжком"
          link={picPathFifth}
          isLiked={true}
          isSaved={isSaved}
        />
        <MoviesCard
          name="Пи Джей Харви: A dog called money"
          link={picPathFirst}
          isLiked={false}
          isSaved={isSaved}
        />
        <MoviesCard
          name="По волнам: Искусство звука в кино"
          link={picPathSecond}
          isLiked={true}
          isSaved={isSaved}
        />
        <MoviesCard
          name="Рудбой"
          link={picPathThird}
          isLiked={true}
          isSaved={isSaved}
        />
        <MoviesCard
          name="Скейт — кухня"
          link={picPathFourth}
          isLiked={true}
          isSaved={isSaved}
        />
        <MoviesCard
          name="Война искусств"
          link={picPathFifth}
          isLiked={false}
          isSaved={isSaved}
        />
        <MoviesCard
          name="Зона"
          link={picPathFirst}
          isLiked={true}
          isSaved={isSaved}
        />
      </ul>
    </section>
  );
}

export default MoviesCardList;
