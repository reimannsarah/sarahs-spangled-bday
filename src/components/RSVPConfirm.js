import React from "react";

function RSVPConfirm(props) {
  const thisUser = props.userInfo
  return (
    
    <div className="confirmation">
      <h1>RSVP Confirmation</h1>
      <p>Does your information look correct?</p>
      <hr />
      <p><strong>Name:</strong> {thisUser.name}</p>
      <p><strong>Email:</strong> {thisUser.email}</p>
      <p><strong>Species:</strong> {thisUser.species}</p>
      <p><strong>Do You Believe?</strong> {thisUser.doYouBelieve}</p>
      <hr />
      <div className="buttons">
        <button onClick={props.looksGood}>Looks Good!</button>
        <button onClick={() => props.delete(thisUser.attendantId)}>Start Over</button>
      </div>
    </div>
  )
}

export default RSVPConfirm;