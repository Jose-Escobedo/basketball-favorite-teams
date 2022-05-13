import React from "react";

const TeamStatsCard = ({ stats }) => {
  return (
    <div id="team-container" className="team-container">
      <div id="team-card" className="team-card">
        <h2 id="team-card-number">{stats.response.team.id}</h2>
        <img
          src={stats.response.team.logo}
          alt={stats.response.team.name}
        ></img>
        <h1>{stats.response.team.name}</h1>
      </div>
    </div>
  );
};

export default TeamStatsCard;
