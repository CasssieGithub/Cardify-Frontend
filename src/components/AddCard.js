import React, { useState } from "react";
import axios from "axios";

const AddCard = (props) => {
  const [card, setCard] = useState({});
  const [deck, setDeck] = useState({});

  const handleChange = (event) => {
    setCard({ ...card, [event.target.name]: event.target.value });
  };
  const handleDeck = (event) => {
    axios
      .get("http://localhost:8000/api/decks/" + props.deck.id)
      .then((response) => {
        setDeck(response.data);
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setCard(card);
    axios.post("http://localhost:8000/api/cards", card).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className="App cardAdd">
      <h3>Add a New Card</h3>
      <form
        className="AddCardForm"
        onSubmit={handleSubmit}
        enctype="multipart/form-data"
      >
        {/* <label>
          Deck:
          <input type="text" name="deck" placeholder="Enter deck here" />
        </label> */}
        <label>
          Question:
          <input
            type="text"
            name="question"
            placeholder="Enter question here"
            onChange={handleChange}
          />
        </label>
        <label>
          Answer:
          <input
            type="text"
            name="answer"
            placeholder="Enter answer here"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="image">Image: </label>
        <input
          type="text"
          name="image"
          placeholder="image adress"
          onChange={handleChange}
        />
        {/* <input type='text' name='deck' value={props.deck} style={{display: 'none'}}/> */}

        <button type="submit">Add Card</button>
      </form>
    </div>
  );
};

export default AddCard;
