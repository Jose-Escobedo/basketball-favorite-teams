import "./App.css";
import Home from "./components/Home";
import Teams from "./components/Teams";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/Header";
import FavoriteTeams from "./components/FavoriteTeams";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [teams, setTeams] = useState([]);
  const [favoriteTeams, setFavoriteTeams] = useState([]);
  // const [errors, setErrors] = useState(false);
  // const [cart, setCart] = useState([]);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  function onDeleteTeam(id) {
    const updatedTeams = favoriteTeams.filter((team) => team.id !== id);
    setFavoriteTeams(updatedTeams);
  }

  function handleChangeTeam(changedTeam) {
    const changedTeams = favoriteTeams.map((team) => {
      if (team.id === changedTeam.id) {
        return changedTeam;
      } else {
        return team;
      }
    });
    setFavoriteTeams(changedTeams);
  }

  useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        });
      }
    });
    fetch("/favorites")
      .then((res) => res.json())
      .then(setFavoriteTeams);

    fetch("/teams")
      .then((res) => res.json())
      .then(setTeams);
  }, []);

  // if (!isAuthenticated)
  //   return (
  //     <Login
  //       error={"please login"}
  //       setIsAuthenticated={setIsAuthenticated}
  //       setUser={setUser}
  //     />
  //   );

  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <Routes>
        {user ? (
          <Route
            exact
            path="favorites"
            element={
              <FavoriteTeams
                onDeleteTeam={onDeleteTeam}
                favoriteteams={favoriteTeams}
                changeTeam={handleChangeTeam}
                user={user}
              />
            }
          />
        ) : (
          <>
            {/* add a filter to teams  */}
            <Route exact path="teams" element={<Teams teams={teams} />} />
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="login"
              element={
                <Login
                  setIsAuthenticated={setIsAuthenticated}
                  setUser={setUser}
                />
              }
            />
            <Route
              exact
              path="signup"
              element={
                <Signup
                  setUser={setUser}
                  setIsAuthenticated={setIsAuthenticated}
                />
              }
            />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
