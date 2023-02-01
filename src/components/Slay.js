import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getUserInfo, getUserMovies } from "../utils/MainApi";

import Header from "./Header/Header";
import Movies from "./Movies/Movies";
import Navigation from "./Navigation/Navigation";
import Profile from "./Profile/Profile";
import SavedMovies from "./SavedMovies/SavedMovies";

function Slay({ setCurrentUser, setLoggedIn, setIsPreloaderOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [userMovies, setUserMovies] = useState([]);

  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    getUserInfo(jwt).then((res) => {
      setCurrentUser(res);
    });
    getUserMovies(jwt)
      .then((res) => {
        setUserMovies(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleMenuOpen() {
    setIsOpen(true);
  }

  function handleMenuClose() {
    setIsOpen(false);
  }

  return (
    <>
      <Header handleMenuOpen={handleMenuOpen}></Header>
      <Navigation
        isOpen={isOpen}
        handleMenuClose={handleMenuClose}
      ></Navigation>
      <Routes>
        <Route
          exact
          path="/movies"
          element={
            <Movies
              setIsPreloaderOpen={setIsPreloaderOpen}
              jwt={jwt}
              userMovies={userMovies}
            />
          }
        />

        <Route
          exact
          path="/profile"
          element={
            <Profile
              setLoggedIn={setLoggedIn}
              setCurrentUser={setCurrentUser}
              jwt={jwt}
              setIsPreloaderOpen={setIsPreloaderOpen}
            />
          }
        />

        <Route
          exact
          path="/saved-movies"
          element={
            <SavedMovies
              setIsPreloaderOpen={setIsPreloaderOpen}
              jwt={jwt}
              userMovies={userMovies}
            />
          }
        />
      </Routes>
    </>
  );
}

export default Slay;
