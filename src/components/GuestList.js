import React from 'react';
import bananapickle from '../imgs/banana-pickle.gif';
import Guest from './Guest';
import PropTypes from 'prop-types';

function GuestList(props) {
  const guestList = props.guestList;
  return (
    <div className="guests">
      <h1>THE GUESTS</h1>
      <img className="banana-pickle" alt="gif of banana and pickle dancing" src={bananapickle} />
      <img className="banana-pickle" alt="gif of banana and pickle dancing" src={bananapickle} />
      <div className="guest-list">
        {guestList.map((guest) =>
          <Guest
          whenGuestClicked={props.onGuestClick}
          name={guest.name}
          species={guest.species}
          doYouBelieve={guest.doYouBelieve}
          email={guest.email}
          id={guest.attendantId}
          key={guest.attendantId}
          />
          // <li onClick={()=> props.onGuestClick(index)} key={index}>
          //   <h3>{guest.name}</h3>
          //   <p><strong>Species:</strong> {guest.species}</p>
          //   <p><strong>Do You Believe?</strong> {guest.doYouBelieve}</p>
          //   <p id="email">{guest.email}</p>
          // </li>
        )}
      </div>
    </div>
  )
}

GuestList.propTypes = {
  guestList: PropTypes.array,
  whenGuestClicked: PropTypes.func
}

export default GuestList;