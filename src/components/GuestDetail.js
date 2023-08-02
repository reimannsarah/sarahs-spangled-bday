import React from "react";
import PropTypes from 'prop-types';

function GuestDetail(props) {
  const guest = props.guest;
  return (
    <div>
      <h1>RSVP Confirmation</h1>
      <p>Does your information look correct?</p>
      <hr />
      <p>Name: {guest.name}</p>
      <p>Email: {guest.email}</p>
      <p>Species: {guest.species}</p>
      <p>Do You Believe? {guest.doYouBelieve}</p>
      <hr />
      <button onClick={props.onLooksGood}>Looks Good!</button>
      <button>Edit my RSVP</button>
      <button onClick={() => props.onClickingDelete(guest.attendantId)}>Delete my RSVP</button>
    </div>
  )
} 

GuestDetail.propTypes = {
  onLooksGood: PropTypes.func,
  onCickingDelete: PropTypes.func
}

export default GuestDetail;