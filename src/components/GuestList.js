import React from 'react';

function GuestList(props) {
  const guestList = props.guestList;
  return (
    <div>
      <h1>THE GUESTS</h1>
      <ul>
        {guestList.map((guest, index) =>
          <li key={index}>
            <h3>{guest.name}</h3>
            <p>{guest.email}</p>
            <p>Plus One? {guest.plusOne ? "yes" : "no"}</p>
            <p>Species: {guest.species}</p>
            <p>Do You Believe? {guest.belief}</p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default GuestList;