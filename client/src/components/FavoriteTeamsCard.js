import React from "react";
import ChangeTeamForm from "./ChangeTeamForm";

function FavoriteTeamCard({ team, onDeleteTeam, changeTeam }) {
  function handleRemoveTeam() {
    fetch(`/favorites/${team.id}`, {
      method: "DELETE",
    });
    onDeleteTeam(team.id);
  }

  function handleChangeTeam(newTeam) {
    changeTeam(newTeam);
  }

  return (
    <div id="change-team-container" className="team-container">
      <div id="change-team-card" className="team-card">
        <img src={team.team.img_url} alt={team.team.name}></img>
        <h1>{team.team.name}</h1>
        <button className="removeteambtn" onClick={handleRemoveTeam}>
          Remove
        </button>
      </div>
      <ChangeTeamForm
        id={team.id}
        name={team.team.name}
        img={team.team.img_url}
        changeTeam={handleChangeTeam}
      />
    </div>
  );
}

export default FavoriteTeamCard;
