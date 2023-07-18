import React from "react";
import ReusableForm from "./ReusableForm";

function RSVPForm(props) {

  function handleNewGuestSubmission(e) {
    e.preventDefault();
    props.onRSVPClick({
        name: e.target.name.value,
        email: e.target.email.value,
        plusOne: e.target.plusOne.value,
        belief: e.target.belief.value,
        species: e.target.species.value
    })
  }

  return (
    <React.Fragment>
      <ReusableForm onPost={handleNewGuestSubmission}/>
    </React.Fragment>
  )
}



export default RSVPForm;