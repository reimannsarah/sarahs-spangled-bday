import React, { useEffect, useState} from 'react';

function PartyControl() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(null);
  const [guestList, setGuestList] = useState([]);
  
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
      console.log(jsonifiedResponse)
      setGuestList(jsonifiedResponse)
      setIsLoaded(true)
    })
    .catch((error) => {
      setError(error.message)
      setIsLoaded(true)
    });
  }, [])

  if (error) {
    return <h1>Error: {error}</h1>
  } else if (!isLoaded) {
    return <h1>.........loading god okay........</h1>
  } else {
    return (
      <React.Fragment>
        <h1>THE GUESTS</h1>
        <ul>
          {guestList.map((guest, index) => 
            <li key={index}>
              <h3>{guest.name}</h3>
              <p>{guest.email}</p>
              <p>Plus One? {guest.plusone ? "yes" : "no"}</p>
            </li>
            )}
        </ul>
      </React.Fragment>
    )
  }
}

export default PartyControl;