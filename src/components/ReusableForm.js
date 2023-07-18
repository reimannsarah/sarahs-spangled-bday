import React from "react";

function ReusableForm(props) {
  return(
    <form onSubmit={props.onPost}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" />

      <label htmlFor="email">Email:</label>
      <input type="text" name="email" id="email" />

      <label htmlFor="plusOne">Plus One?</label>
      <select name="plusOne" id="plusOne">
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>

      <label htmlFor="species">Species:</label>
      <input type="text" name="species" id="species" />

      <label htmlFor="belief">Do You Believe?</label>
      <textarea name="belief" id="belief"></textarea>

      <button type="submit">RSVP Me</button>
    </form>
  )
}

export default ReusableForm;