import React, { useState } from "react";
import axios from 'axios'

const AddCard = (props) =>  {
  const [card, setCard] = useState({});
  const [deck, setDeck] = useState(props.deck.id)

  const handleChange = (event) => {
    setCard({...card, [event.target.name]: event.target.value})
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setCard(card)
    axios.post('http://localhost:8000/api/cards', card).then((response) => {
      console.log(response.data)
    })
  };


  return (
    <div className="App cardAdd">
      <h3>Add a New Card</h3>
      <form
        className="AddCardForm"
        onSubmit={handleSubmit}
        enctype="multipart/form-data"
      >
      
       <select name='deck' value={props.deck} style={{display: 'none'}}><option key={props.deck.id} value={props.deck.id} style={{display: 'none'}}></option></select>
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
     
    </div>
  );
}

export default AddCard;
