import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useState, useEffect } from "react";

const AddCard = (props) => {
  const key = props.findDeckById.id;
  const [card, setCard] = useState({
    question: "",
    answer: "",
    image: "",
    deck: key,
  });

  const handleChange = (event) => {
    setCard({ ...card, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCard(card);
    axios.post("http://localhost:8000/api/cards", card).then((response) => {
      props.getCards();
    });
  };

  return (
    <div className="App cardAdd">
      <h3>Add a New Card</h3>
      <form
        className="AddCardForm"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
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
          placeholder="image address"
          onChange={handleChange}
        />

        <button type="submit">Add Card</button>
      </form>
    </div>
  );
};

export default AddCard;
