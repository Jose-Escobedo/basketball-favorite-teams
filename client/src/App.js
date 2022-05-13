import "./App.css";
import Home from "./components/Home";
import Teams from "./components/Teams";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/Header";
import FavoriteTeams from "./components/FavoriteTeams";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import TeamStats from "./components/TeamStats";

function App() {
  const [teams, setTeams] = useState([]);
  const [favoriteTeams, setFavoriteTeams] = useState([]);

  const [teamStats, setTeamStats] = useState([]);

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
    console.log(favoriteTeams);
  }

  const addNewTeam = (e) => {
    fetch("/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(e),
    })
      .then((res) => res.json())
      .then(setFavoriteTeams([...favoriteTeams, e]));
  };

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

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
        "X-RapidAPI-Key": "7ad17cb467msh3cf82fdaf1f4e42p1cf123jsnbf6da2c41fb7",
      },
    };

    fetch(
      "https://api-basketball.p.rapidapi.com/statistics?season=2019-2020&league=12&team=155",
      options
    )
      .then((response) => response.json())
      .then(setTeamStats)
      .catch((err) => console.error(err));
    console.log(teamStats);
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
      <Header
        user={user}
        setUser={setUser}
        setIsAuthenticated={setIsAuthenticated}
      />
      <Routes>
        {user ? (
          <>
            <Route
              exact
              path="favorites"
              element={
                <FavoriteTeams
                  onDeleteTeam={onDeleteTeam}
                  favoriteteams={favoriteTeams}
                  changeTeam={handleChangeTeam}
                  addNewTeam={addNewTeam}
                  user={user}
                />
              }
            />
            <Route
              exact
              path="/"
              element={<Home user={user} teams={teams} />}
            />
          </>
        ) : (
          <>
            {/* add a filter to teams  */}
            <Route exact path="teams" element={<Teams teams={teams} />} />
            <Route
              exact
              path="teamstats"
              element={<TeamStats teamStats={teamStats} />}
            />
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
