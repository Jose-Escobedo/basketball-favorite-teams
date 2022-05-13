import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function TeamCard({ team }) {
  return (
    <div id="team-container" className="team-container">
      <Link className="text-link" to="/teamstats">
        <div id="team-card" className="team-card">
          <h2 id="team-card-number">{team.id}</h2>
          <img src={team.img_url} alt={team.name}></img>
          <h1>{team.name}</h1>
        </div>
      </Link>
    </div>
  );
}

export default TeamCard;
