import React from "react";
import Header from "./Header";
import TeamCard from "./TeamCard";

function Teams({ teams }) {
  return (
    <div className="teams-list-container">
      <h2 id="nba-list-header">NBA Team List</h2>
      {teams.map((team) => {
        return <TeamCard team={team} key={team.id} />;
      })}
    </div>
  );
}

export default Teams;
