import React, { useState, useEffect } from "react";
import axios from "axios";


const Add = (props) => {
  const [deck, setDeck] = useState({});

  const handleChange = (event) => {
    setDeck({ ...deck, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(deck)
    axios.post("http://localhost:8000/api/decks", deck).then((response) => {
      console.log(deck);
      props.getDecks();
    });
  };

  return (
    <>
      <form className="deckAdd" onSubmit={handleSubmit}>
        <h3>Add a New Deck</h3>
        <label htmlFor="title">Title: </label>
        <input
          className="formInput"
          type="text"
          name="title"
          value={deck.title}
          onChange={handleChange}
        />

        <label htmlFor="subject">Subject: </label>

        <select name="subject" onChange={handleChange} className="formInput">
          <option id='selectsub' value="" disabled selected hidden>Select Subject</option>
          <option value='science'>Science</option>
          <option value='social'>Social Studies</option>
          <option value='math'>Math</option>
          <option value='english'>English</option>

        </select>
        <br/>
        <br/>
        <label htmlFor='topic'>Topic: </label>
        <input type='text' name='topic' onChange={handleChange}/>
        <br/>
        <br/>
        <label htmlFor='classs'>Class: </label>
        <input type='text' name='classs' onChange={handleChange}/>

        <label htmlFor="comments">Comments: </label>
        <input
          className="formInput"
          type="text"
          name="comments"
          value={deck.comments}
          onChange={handleChange}
        />

        <br/>
        <br/>
        <input type="submit" />

      </form>
    </>
  );
};
export default Add;
