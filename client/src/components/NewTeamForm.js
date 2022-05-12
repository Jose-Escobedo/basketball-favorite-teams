import React from "react";
import { useState } from "react";
function NewTeamForm({ addNewTeam, id, user }) {
  //   const [teamImg, setTeamImg] = useState("");
  const blankTeam = {
    user_id: 0,
    team_id: 0,
  };
  const [newNumber, setTeamNumber] = useState(blankTeam);

  const handleTeamNumber = (e) => {
    setTeamNumber({
      user_id: id,
      team_id: e.target.value,
    });
    console.log(newNumber);
  };

  function handleForm(e) {
    e.preventDefault();
    addNewTeam(newNumber);
    setTeamNumber(blankTeam);
  }
  return (
    <div id="add-team-form-container" className="form-container">
      <h2 id="add-team-header">Want to add a team slot?</h2>
      <form id="team-add-form" onSubmit={handleForm} className="team-add-form">
        <input
          type="number"
          name="Team Number"
          value={newNumber.team_id}
          placeholder="Insert a team number here..."
          onChange={handleTeamNumber}
        />
        {/* <input
          type="text"
          name="img_url"
          placeholder="Insert team logo url here..."
          rows={5}
          value={teamImg}
          onChange={handleTeamImg}
        /> */}
      </form>
      <button onClick={handleForm} className="form-button" type="submit">
        Add Team Slot
      </button>
    </div>
  );
}
export default NewTeamForm;
