import React from "react";

function TeamCard({ team }) {
  return (
    <div className="team-container">
      <div className="team-card">
        <img src={team.img_url} alt={team.name}></img>
        <h1>{team.name}</h1>
      </div>
    </div>
  );
}

export default TeamCard;
