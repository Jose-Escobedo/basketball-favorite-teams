import React from "react";
import { useState } from "react";
function ChangeTeamForm({ changeTeam, id }) {
  //   const [teamImg, setTeamImg] = useState("");
  const [teamNumber, setTeamNumber] = useState("");

  const handleTeamNumber = (e) => {
    setTeamNumber(e.target.value);
  };
  //   const handleTeamImg = (e) => {
  //     setTeamImg(e.target.value);
  //   };
  function handleSubmit(e) {
    e.preventDefault();
    // setTeamImg(e.target.value);
    setTeamNumber(e.target.value);

    fetch(`/favorites/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        team_id: teamNumber,
      }),
    })
      .then((res) => res.json())
      .then((newTeam) => changeTeam(newTeam));
  }
  return (
    <div id="team-form-container" className="form-container">
      <form id="team-form" onSubmit={handleSubmit} className="review-form">
        <input
          type="number"
          name="name"
          value={teamNumber}
          placeholder="Insert team number here..."
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
      <button onClick={handleSubmit} className="form-button" type="submit">
        Edit Team Number
      </button>
    </div>
  );
}
export default ChangeTeamForm;
