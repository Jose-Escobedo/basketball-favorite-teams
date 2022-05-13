import React from "react";
import { useState } from "react";
function NewTeamForm({ addNewTeam, id, user }) {
  //   const [teamImg, setTeamImg] = useState("");
  const blankTeam = {
    user_id: user.id,
    team_id: null,
  };
  const [newNumber, setFormData] = useState(blankTeam);
  const { user_id, team_id } = newNumber;

  const handleTeamNumber = (e) => {
    setFormData({
      ...newNumber,
      team_id: e.target.value,
    });
    console.log(newNumber);
  };

  function handleForm(e) {
    e.preventDefault();
    addNewTeam(newNumber);
    setFormData(blankTeam);
  }
  return (
    <div id="add-team-form-container" className="form-container">
      <h2 id="add-team-header">Want to add a team slot?</h2>
      <form id="team-add-form" onSubmit={handleForm} className="team-add-form">
        <label id="chooseateam" htmlFor="teamlistnum">
          Choose a Team
        </label>
        <select id="teamlistnum" onChange={(val) => handleTeamNumber(val)}>
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
      </form>
      <button
        id="team-slot"
        onClick={handleForm}
        className="form-button"
        type="submit"
      >
        Add Team Slot
      </button>
    </div>
  );
}
export default NewTeamForm;
