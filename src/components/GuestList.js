import React from 'react';
import bananapickle from '../imgs/banana-pickle.gif';

function GuestList(props) {
  const guestList = props.guestList;
  return (
    <div className="guest-list">
      <h1>THE GUESTS</h1>
      <img className="banana-pickle" alt="gif of banana and pickle dancing" src={bananapickle}/>
      <img className="banana-pickle" alt="gif of banana and pickle dancing" src={bananapickle}/>
      <ul>
        {guestList.map((guest, index) =>
          <li key={index}>
            <h3>{guest.name}</h3>
            <p><strong>Species:</strong> {guest.species}</p>
            <p><strong>Do You Believe?</strong> {guest.doYouBelieve}</p>
            <p id="email">{guest.email}</p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default GuestList;