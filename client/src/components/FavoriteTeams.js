import React from "react";
import Header from "./Header";
import FavoriteTeamsCard from "./FavoriteTeamsCard";
import NewTeamForm from "./NewTeamForm";

function FavoriteTeams({
  favoriteteams,
  user,
  onDeleteTeam,
  changeTeam,
  addNewTeam,
}) {
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
      <NewTeamForm
        addNewTeam={addNewTeam}
        key={user.id}
        userid={user.id}
        team={favoriteteams}
      />
    </div>
  );
}

export default FavoriteTeams;
