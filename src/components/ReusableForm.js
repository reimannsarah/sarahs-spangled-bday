import React from "react";

function ReusableForm(props) {
  return(
    <form onSubmit={props.onPost}>
      <input type="text" name="name" id="name" placeholder="NAME" required />

      <input type="email" name="email" id="email" placeholder="EMAIL" required />

      <input type="text" name="species" id="species" placeholder="SPECIES" required />

      <textarea name="belief" id="belief" placeholder="DO YOU BELIEVE?" required ></textarea>

      <button type="submit">RSVP Me</button>
    </form>
  )
}

export default ReusableForm;