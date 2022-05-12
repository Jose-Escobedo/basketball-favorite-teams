import React from "react";
import Header from "./Header";
import TeamCard from "./TeamCard";

function Teams({ teams }) {
  return (
    <>
      {teams.map((team) => {
        return <TeamCard team={team} key={team.id} />;
      })}
    </>
  );
}

export default Teams;
