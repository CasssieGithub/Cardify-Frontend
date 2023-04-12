import React, { useState, useEffect } from "react";

const Add = (props) => {
  let emptyDeck = { title: "", subject: "", comments: "" };
  const [deck, setDeck] = useState(emptyDeck);

  const handleChange = (event) => {
    setDeck({ ...deck, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleCreate(deck);
  };
  return (
    <>
      <form className="deckAdd" onSubmit={handleSubmit}>
        <h3>Add a New Deck</h3>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          value={deck.title}
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
    </>
  );
};
export default Add;
