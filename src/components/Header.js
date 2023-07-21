import React from "react";
import scooter from "../imgs/scooter.gif";

function Header() {
  return(
    <div className="header">
      <h1>SARAH'S 27th BIRTHDAY SMASH</h1>
      <div className="scooter">
        <img alt="abstract moving art" src={scooter} />
      </div>
    </div>
  )
}

export default Header