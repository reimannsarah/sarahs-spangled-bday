import React, { useEffect, useState } from 'react';
import GuestList from './GuestList';
import Header from './Header';
import NavBar from './NavBar';
import PartyDetails from './PartyDetails';
import RSVPConfirm from './RSVPConfirm';
import RSVPForm from './RSVPForm';

function PartyControl() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(null);
  const [guestList, setGuestList] = useState([]);
  const [user, setUser] = useState({});
  const [rsvp, setRsvp] = useState(null);
  const [showGuestList, setShowGuestList] = useState(null);
  const [partyDetailsPage, setPartyDetailsPage] = useState(true);
  const [confirmaitonPage, setConfirmationPage] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  useEffect(() => {
    fetch(`https://sarah-reimann-bday.azurewebsites.net/api/Attendants`)
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
  }, [guestList])

  function handlePost(formData) {
    console.log(formData)
    fetch(`https://sarah-reimann-bday.azurewebsites.net/api/Attendants`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then((data) => {
        setUser(data)
        RsvpConfirmationToggler();
      })
      .catch((error) => {
        console.log('Error posting data:', error);
      });

    // set new guest list
    // fetch(`https://sarah-reimann-bday.azurewebsites.net/api/Attendants`)
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error(`${response.status}: ${response.statusText}`)
    //     } else {
    //       return response.json()
    //     }
    //   })
    //   .then((jsonifiedResponse) => {
    //     setGuestList(jsonifiedResponse)
    //     setIsLoaded(true)
    //   })
    //   .catch((error) => {
    //     setError(error.message)
    //     setIsLoaded(true)
    //   });
  };

  const deleteGuest = (id) => {
    fetch(`https://sarah-reimann-bday.azurewebsites.net/api/Attendants/${id}`, {
      method: 'DELETE'
    })
      .catch((error) => {
        console.log('Error deleting data:', error);
      });
    deleteConfirmationPopUp();
    setTimeout(() => {
      homeToggler()
    }, 2000)
  }

  const deleteConfirmationPopUp = () => {
    setDeleteConfirm(true);
    setConfirmationPage(false);
  }

  const showRsvp = () => {
    setRsvp(true);
    setShowGuestList(false);
    setPartyDetailsPage(false);
  }

  const RsvpConfirmationToggler = () => {
    setRsvp(false);
    setShowGuestList(false);
    setPartyDetailsPage(false);
    setConfirmationPage(true);
  }

  const guestListToggler = () => {
    setShowGuestList(true);
    setRsvp(false);
    setPartyDetailsPage(false);
    setConfirmationPage(false);
  }

  const homeToggler = () => {
    setPartyDetailsPage(true);
    setShowGuestList(false);
    setRsvp(false);
    setConfirmationPage(false);
  }

  let currentlyVisible;

  if (partyDetailsPage) {
    currentlyVisible =
      <>
        <NavBar user={user} homeClick={homeToggler} guestListClick={guestListToggler} rsvpClick={showRsvp} />
        <PartyDetails />
      </>
  } else if (rsvp) {
    currentlyVisible =
      <>
        <NavBar user={user} homeClick={homeToggler} guestListClick={guestListToggler} rsvpClick={showRsvp} />
        <RSVPForm onRSVPClick={handlePost} />
      </>

  } else if (confirmaitonPage) {
    currentlyVisible =
      <>
        <NavBar user={user} homeClick={homeToggler} guestListClick={guestListToggler} rsvpClick={showRsvp} />
        <RSVPConfirm userInfo={user} looksGood={guestListToggler} delete={deleteGuest} />
      </>

  } else if (showGuestList) {
    error ?
      currentlyVisible = <h1>Error: {error}</h1> :
      (!isLoaded) ?
        currentlyVisible = <h1>.........loading god okay........</h1> :
        currentlyVisible =
        <>
          <NavBar user={user} homeClick={homeToggler} guestListClick={guestListToggler} rsvpClick={showRsvp} />
          <GuestList guestList={guestList} />
        </>
  } else if (deleteConfirm) {
    currentlyVisible = <h1>Your RSVP is being deleted...</h1>
  }
  return (
    <>
      <Header />
      {currentlyVisible}
    </>
  )
}

export default PartyControl;