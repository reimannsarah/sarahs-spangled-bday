import React from "react";
import PropTypes from 'prop-types';

function Guest(props) {
  return (
    <div className="guest" key={props.id} onClick = {() => props.whenGuestClicked(props.id)}>
      <h3>{props.name}</h3>
      <p><strong>Species:</strong> {props.species}</p>
      <p><strong>Do You Believe?</strong> {props.doYouBelieve}</p>
      <p id="email">{props.email}</p>
    </div>
  )
}

Guest.propTypes = {
  name: PropTypes.string,
  species: PropTypes.string,
  doYouBelieve: PropTypes.string,
  email: PropTypes.string,
  whenGuestClicked: PropTypes.func
}

export default Guest;