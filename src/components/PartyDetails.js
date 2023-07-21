import berli from '../imgs/berli-smash.gif';
import React from "react";

function PartyDetails() {
  return (
    <div className="party-details">
      <h1>LET'S RAGE </h1>
      <h4>When: </h4>
      <p>September 9th at 6pm</p>
      <h4>Where: </h4>
      <p>Sarah and Lucy's Castle</p>
      <p>2126 NE 49th Avenue</p>
      <h4>What: </h4>
      <p>Rage Room get your crank on and bring something to smash</p>
      <h4>Hosted by:</h4>
      <p>Lucy and Sarah and Emma</p>
      <img alt="berli smashing a vase with a baseball bat" src={berli} />
    </div>
  )
}
export default PartyDetails;