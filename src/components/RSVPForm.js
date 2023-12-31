import React from "react";
import ReusableForm from "./ReusableForm";

function RSVPForm(props) {

  function handleNewGuestSubmission(e) {
    e.preventDefault();
    props.onRSVPClick({
        name: e.target.name.value,
        species: e.target.species.value,
        doYouBelieve: e.target.belief.value,
    })
  }

  return (
    <React.Fragment>
      <ReusableForm onPost={handleNewGuestSubmission}/>
    </React.Fragment>
  )
}



export default RSVPForm;