import React, { useState } from "react";
import axios from 'axios'

const Edit = (props) => {
  const [deck, setDeck] = useState({ ...props.deck })
  const [edit, setEdit] = useState(false)

  const handleEdit = (event) => {
    setEdit(!edit)
  }
  const handleChange = (event) => {
    setDeck({ ...deck, [event.target.name]: event.target.value });
  };
  const handleDelete = (event) => {
    axios.delete(`http://localhost:8000/api/decks/${deck.id}`).then((response) => {
      props.getDecks();
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8000/api/decks/${deck.id}`, deck).then((response) => {
      props.getDecks();
    });
  };

  return (
    <>
    <button class='editdeckbttn' onClick={handleEdit}>Edit Deck {deck.title}</button>
    {edit ? 
    <form className="deckAdd" onSubmit={handleSubmit}>
      <h3>Edit Deck {deck.title}</h3>
      <label htmlFor="title">Title: </label>
      <input
        className="formInput"
        type="text"
        name="title"
        value={deck.title}
        onChange={handleChange} placeholder = {deck.title}
      />

      <label htmlFor="subject">Subject: </label>

      <select name="subject" onChange={handleChange} className="formInput">
        <option id='selectsub' value="" disabled selected hidden>{props.subject}</option>
        <option value='science'>Science</option>
        <option value='social'>Social Studies</option>
        <option value='math'>Math</option>
        <option value='english'>English</option>

      </select>
      <br/>
      <br/>
      <label htmlFor='topic'>Topic: </label>
      <input type='text' name='topic' onChange={handleChange} placeholder = {deck.topic}/>
      <br/>
      <br/>
      <label htmlFor='classs'>Class: </label>
      <input type='text' name='classs' onChange={handleChange} placeholder={deck.classs}/>

      <label htmlFor="comments">Comments: </label>
      <input
        className="formInput"
        type="text"
        name="comments"
        value={deck.comments}
        onChange={handleChange}
      placeholder = {deck.comments}/>

      <br/>
      <br/>
      <input type="submit" />
      <br/>
      <br/>
      <button onClick={handleDelete}>Delete Deck</button>
    </form>
: <></>}
  </>
);
};
export default Edit;



