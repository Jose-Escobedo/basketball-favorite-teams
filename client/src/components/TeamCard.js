import React from "react";

function TeamCard({ team }) {
  return (
    <div id="team-container" className="team-container">
      <div id="team-card" className="team-card">
        <h2 id="team-card-number">{team.id}</h2>
        <img src={team.img_url} alt={team.name}></img>
        <h1>{team.name}</h1>
      </div>
    </div>
  );
}

export default TeamCard;
