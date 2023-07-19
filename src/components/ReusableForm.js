import React from "react";

function ReusableForm(props) {
  return(
    <form onSubmit={props.onPost}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" required />

      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" required />

      <label htmlFor="species">Species:</label>
      <input type="text" name="species" id="species" required />

      <label htmlFor="belief">Do You Believe?</label>
      <textarea name="belief" id="belief" required ></textarea>

      <button type="submit">RSVP Me</button>
    </form>
  )
}

export default ReusableForm;