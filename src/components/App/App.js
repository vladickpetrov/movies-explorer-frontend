import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Login from "../Login/Login";
import Main from "../Main/Main";
import NotFound from "../NotFound/NotFound";
import { checkToken } from "../../utils/auth";
import ProtectedRoute from "../ProtectedRoute";
import Register from "../Register/Register";
import "./App.css";
import { getUserInfo } from "../../utils/MainApi";
import Slay from "../Slay";
import Preloader from "../Preloader/Preloader";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isPreloaderOpen, setIsPreloaderOpen] = useState(false);

  const navigation = useNavigate();

  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    checkAppToken();
    if (jwt) {
      getUserInfo(jwt).then((res) => {
        setCurrentUser(res);
      });
    }
  }, []);

  function handleLogIn() {
    setLoggedIn(true);
  }

  function checkAppToken() {
    if (jwt) {
      checkToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Preloader isPreloaderOpen={isPreloaderOpen} />
        <Routes>
          <Route path="*" element={<ProtectedRoute loggedIn={loggedIn} />}>
            <Route
              path="*"
              element={
                <Slay
                  setCurrentUser={setCurrentUser}
                  setLoggedIn={setLoggedIn}
                  setIsPreloaderOpen={setIsPreloaderOpen}
                />
              }
            />
          </Route>

          <Route
            path="/signin"
            element={
              <Login
                handleLogIn={handleLogIn}
                navigation={navigation}
                setIsPreloaderOpen={setIsPreloaderOpen}
              />
            }
          ></Route>

          <Route
            path="/signup"
            element={<Register setIsPreloaderOpen={setIsPreloaderOpen} />}
          ></Route>

          <Route path="/main" element={<Main loggedIn={loggedIn} />}></Route>

          <Route
            exact
            path="/"
            element={
              loggedIn ? <Navigate to="/movies" /> : <Navigate to="/main" />
            }
          ></Route>

          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
