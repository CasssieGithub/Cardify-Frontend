import React, { useState, useEffect } from "react";
import axios from 'axios'

const AddCard = (props) =>  {
  const key = props.deck.id
  const [card, setCard] = useState({question: '', answer: '', image: '', deck : key});
  // const [deck, setDeck] = useState(props.deck)

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
      
       {/* <select name='deck' value={props.deck.id} onChange={handleDeck}>
        <option value={props.deck.id}>Deck {props.deck.title}</option>
        </select> */}
       {/* <input name='deck' style={{display: 'none'}} value={props.deck.id}/> */}
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
