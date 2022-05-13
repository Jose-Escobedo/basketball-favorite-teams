import React from "react";
import { useState } from "react";
function ChangeTeamForm({ changeTeam, team }) {
  //   const [teamImg, setTeamImg] = useState("");
  const [teamNumber, setTeamNumber] = useState("");

  const handleTeamNumber = (e) => {
    setTeamNumber(e.target.value);
    console.log(teamNumber);
  };
  //   const handleTeamImg = (e) => {
  //     setTeamImg(e.target.value);
  //   };
  function handleSubmit(e) {
    e.preventDefault();
    // setTeamImg(e.target.value);
    setTeamNumber(e.target.value);

    fetch(`/favorites/${team.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: team.user_id,
        team: team.team,
        team_id: teamNumber,
      }),
    })
      .then((res) => res.json())
      .then((newTeam) => changeTeam(newTeam));
  }
  return (
    <div id="change-team-for" className="form-container">
      <form onSubmit={handleSubmit} className="change-form">
        <label id="changeteamlabel" htmlFor="teamlistnum">
          Choose a Team
        </label>
        <select id="changeteamlist" onChange={(val) => handleTeamNumber(val)}>
          <option value="1">Suns</option>
          <option value="2">Mavericks</option>
          <option value="3">Grizzlies</option>
          <option value="4">Pelicans</option>
          <option value="5">Nets</option>
          <option value="6">Hawks</option>
          <option value="7">Bucks</option>
          <option value="8">Jazz</option>
        </select>
        {/* <input
          type="text"
          name="img_url"
          placeholder="Insert team logo url here..."
          rows={5}
          value={teamImg}
          onChange={handleTeamImg}
        /> */}
        <input className="form-button" value="Change Team" type="submit" />
      </form>
    </div>
  );
}
export default ChangeTeamForm;
