import React from "react";

function NavBar(props) {
  return (
    <div className="nav-bar">
        <p className="home-btn" onClick={props.homeClick}>Party Deets</p>
        <p className="guest-list-btn" onClick={props.guestListClick}>Guest List</p>
        <button onClick={props.rsvpClick}>RSVP</button>
    </div>
  )
}

export default NavBar;