import React from "react";
import Header from "./Header";
import FavoriteTeamsCard from "./FavoriteTeamsCard";

function FavoriteTeams({ favoriteteams, user, onDeleteTeam, changeTeam }) {
  return (
    <div className="myteam-container">
      <h2 id="myteamheader">{`${
        user.name.charAt(0).toUpperCase() + user.name.slice(1)
      }'s Favorite Teams`}</h2>
      {favoriteteams.map((team) => {
        return (
          <FavoriteTeamsCard
            onDeleteTeam={onDeleteTeam}
            team={team}
            key={team.id}
            changeTeam={changeTeam}
          />
        );
      })}
      {/* <NewTeamForm addNewTeam={addNewTeam} /> */}
    </div>
  );
}

export default FavoriteTeams;
