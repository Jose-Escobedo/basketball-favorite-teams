import React from "react";
import { useState } from "react";
function NewTeamForm({ addNewTeam, userid, team }) {
  const [formData, setFormData] = useState({
    team: team.team,
    user_id: userid,
    team_id: "",
  });

  function onSubmit(e) {
    e.preventDefault();
    const newTeam = {
      team: formData.team,
      user_id: formData.user_id,
      team_id: formData.team_id,
    };
    console.log(newTeam);
    addNewTeam(newTeam);
  }
  return (
    <div id="add-team-form-container" className="form-container">
      <h2 id="add-team-header">Want to add a team slot?</h2>
      <form id="team-add-form" onSubmit={onSubmit} className="team-add-form">
        <label id="chooseateam" htmlFor="teamlistnum">
          Choose a Team
        </label>
        <select
          id="teamlistnum"
          onChange={(e) =>
            setFormData({ ...formData, team_id: e.target.value })
          }
        >
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
          type="number"
          name="Team Number"
          value={newNumber.team_id}
          placeholder="Insert a team # here..."
          onChange={handleTeamNumber}
        /> */}
        {/* <input
          type="text"
          name="img_url"
          placeholder="Insert team logo url here..."
          rows={5}
          value={teamImg}
          onChange={handleTeamImg}
        /> */}
        <input type="submit" value="Add Team Slot" />
      </form>
    </div>
  );
}
export default NewTeamForm;
