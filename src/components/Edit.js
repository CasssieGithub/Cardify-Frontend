import React, { useState } from "react";

const Edit = (props) => {
  const [deck, setDeck] = useState({ ...props.deck });
  const handleChange = (event) => {
    setDeck({ ...deck, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleUpdate(deck);
  };

  return (
    <>
      <details>
        <summary>Edit Deck</summary>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            value={deck.name}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="subject">Subject: </label>
          <input
            type="text"
            name="subject"
            value={deck.subject}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="comments">Comments: </label>
          <input
            type="text"
            name="comments"
            value={deck.comments}
            onChange={handleChange}
          />
          <input type="submit" />
        </form>
      </details>
    </>
  );
};

export default Edit;
