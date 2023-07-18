import React, { useEffect, useState} from 'react';
import GuestList from './GuestList';
import RSVPForm from './RSVPForm';

function PartyControl() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(null);
  const [guestList, setGuestList] = useState([]);
  const [user, setUser] = useState(null);
  const [rsvp, setRsvp] = useState(null);
  const [showGuestList, setShowGuestList] = useState(null);
  
  useEffect(() => {
    fetch(`https://localhost:5001/api/Attendants`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`)
      } else {
        return response.json()
      }
    })
    .then((jsonifiedResponse) => {
      setGuestList(jsonifiedResponse)
      setIsLoaded(true)
    })
    .catch((error) => {
      setError(error.message)
      setIsLoaded(true)
    });
  }, [])

  function handlePost(formData) {
    guestListToggler();
    setUser(formData);
    console.log(user);

    const newGuestList = guestList.concat(formData);
    setGuestList(newGuestList);

    fetch(`http://localhost:5000/api/Attendants`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('POST response', data);
      })
      .catch((error) => {
        console.log('Error posting data:', error);
      });
  };

  const showRsvp = () => {
    setRsvp(true);
    setShowGuestList(false);
  }

  const guestListToggler = () => {
    setShowGuestList(true);
    setRsvp(false);
  }

  let currentlyVisible;

  if (rsvp) {
    currentlyVisible = <RSVPForm onRSVPClick={handlePost}/>
  } else if (showGuestList) {
    currentlyVisible = <GuestList guestList={guestList}/>
  }
  if (error) {
    return <h1>Error: {error}</h1>
  } else if (!isLoaded) {
    return <h1>.........loading god okay........</h1>
  } else {
    return (
      <>
      {currentlyVisible}
      <button onClick={showRsvp}>RSVP!</button>
      <button onClick={guestListToggler}>See The Guests</button>
      </>
    )
  }
}

export default PartyControl;