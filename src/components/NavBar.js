import React from "react";

function NavBar(props) {
  return (
    <div className="nav-bar">
        <p className="home-btn" onClick={props.homeClick}>Party Deets</p>
        <p className="guest-list-btn" onClick={props.guestListClick}>Guest List</p>
        {(Object.keys(props.user).length === 0) ? <button onClick={props.rsvpClick}>RSVP</button> : <p>See ya there, <span>{props.user.name}</span></p>}
    </div>
  )
}

export default NavBar;