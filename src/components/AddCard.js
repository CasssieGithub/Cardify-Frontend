import React, { useState } from "react";
import Card from "./Card";
import axios from 'axios'

function App() {
  const [card, setCard] = useState({});

  const handleChange = (event) => {
    setCard({...card, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setCard(card)
    axio.post('http://localhost:8000/cards', card).then((response) => {
      console.log(response.data)
    })
  };

  return (
    <div className="App cardAdd">
      <h3>Add a New Card</h3>
      <form className="AddCardForm" onSubmit={handleSubmit}>
        <label>
          Question:
          <input type="text" name="question" placeholder="Enter question here" onChange={handleChange} />
        </label>
        <label>
          Answer:
          <input type="text" name="answer" placeholder="Enter answer here" onChange={handleChange} />
        </label>
        <label htmlFor='image'>Image: </label>
        <input type='text' name='image' placeholder='image adress' onChange={handleChange}/>
        <button type="submit">Add Card</button>
      </form>
      <Card/>
    </div>
  );
}

export default App;
