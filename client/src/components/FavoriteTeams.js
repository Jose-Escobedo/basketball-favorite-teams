import React from "react";
import Header from "./Header";
import TeamCard from "./TeamCard";

function FavoriteTeams({ teams, user }) {
  return (
    <>
      <Header />
      {teams.map((team) => {
        return <TeamCard team={team} key={team.id} />;
      })}
    </>
  );
}

export default FavoriteTeams;
