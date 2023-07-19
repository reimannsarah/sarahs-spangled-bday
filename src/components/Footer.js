import React from "react";
import scooter from "../imgs/scooter.gif";

function Footer() {
  return (
    <div className="footer">
      <div className="scooter">
        <img alt="abstract moving art" src={scooter} />
      </div>
      <p>&#xa9; 2023 Emma Gerigscott and Sarah Reimann, Pancreas Designs, Ladies IT Department</p>
    </div>
  )
}

export default Footer;