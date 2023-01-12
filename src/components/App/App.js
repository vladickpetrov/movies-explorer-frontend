import { Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/movies" element={<Movies></Movies>} />
        <Route path="/saved-movies" element={<SavedMovies></SavedMovies>} />
        <Route path="/profile" element={<Profile></Profile>} />
        <Route path="/signin" element={<Login></Login>} />
        <Route path="/signup" element={<Register></Register>} />
        <Route path="/*" element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
