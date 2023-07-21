import React from "react";

function RSVPConfirm(props) {
  const thisUser = props.userInfo
  return (
    
    <div>
      <h1>RSVP Confirmation</h1>
      <p>Does your information look correct?</p>
      <hr />
      <p>Name: {thisUser.name}</p>
      <p>Email: {thisUser.email}</p>
      <p>Species: {thisUser.species}</p>
      <p>Do You Believe? {thisUser.doYouBelieve}</p>
      <hr />
      <button onClick={props.looksGood}>Looks Good!</button>
      <button>Edit my RSVP</button>
      <button onClick={() => props.delete(thisUser.attendantId)}>Delete my RSVP</button>
    </div>
  )
}

export default RSVPConfirm;