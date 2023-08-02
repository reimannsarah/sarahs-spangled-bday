import React from "react";
import PropTypes from 'prop-types';

function GuestDetail(props) {
  const guest = props.guest;
  return (
    <div className="confirmation">
      <h1>Double Check</h1>
      <hr />
      <p><strong>Name:</strong> {guest.name}</p>
      <p><strong>Species:</strong> {guest.species}</p>
      <p><strong>Do You Believe?</strong> {guest.doYouBelieve}</p>
      <hr />
      <div className="buttons">
        <button onClick={props.onLooksGood}>Looks Good!</button>
        <button onClick={() => props.onClickingDelete(guest.attendantId)}>Start Over</button>
      </div>
    </div>
  )
} 

GuestDetail.propTypes = {
  onLooksGood: PropTypes.func,
  onCickingDelete: PropTypes.func
}

export default GuestDetail;