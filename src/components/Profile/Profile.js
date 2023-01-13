import Header from "../Header/Header";
import "./Profile.css";

function Profile() {
  return (
    <>
      <Header />
      <section className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <div className="profile__data">
          <div className="profile__container">
            <span className="profile__subtitle">Имя</span>
            <p className="profile__name">Виталий</p>
          </div>
          <div className="profile__container">
            <span className="profile__subtitle">E-mail</span>
            <p className="profile__name">pochta@yandex.ru</p>
          </div>
        </div>
        <button className="profile__edit clearbutton">Редактировать</button>
        <button className="profile__signout clearbutton">
          Выйти из аккаунта
        </button>
      </section>
    </>
  );
}

export default Profile;
