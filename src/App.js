import React, { useState, useEffect } from "react";
import axios from "axios";
import Add from "./components/Add";
import Edit from "./components/Edit";
import "./App.css";

function App() {
  let [decks, setDecks] = useState([]);

  // ============================================================
  //                        CREATE FUNCTION
  // ============================================================
  const handleCreate = (addDeck) => {
    axios.post("http://localhost:8000/api/decks", addDeck).then((response) => {
      console.log(response);
      getDecks();
    });
  };
  // ============================================================
  //                        READ FUNCTION
  // ============================================================
  const getDecks = () => {
    axios
      .get("http://localhost:8000/api/decks")
      .then(
        (response) => setDecks(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error));
  };
  // ============================================================
  //                        DELETE FUNCTION
  // ============================================================
  const handleDelete = (event) => {
    axios
      .delete("http://localhost:8000/api/decks/" + event.target.value)
      .then((response) => {
        getDecks();
      });
  };
  // ============================================================
  //                        EDIT FUNCTION
  // ============================================================
  const handleUpdate = (editDeck) => {
    console.log(editDeck);
    axios
      .put("http://localhost:8000/api/decks/" + editDeck.id, editDeck)
      .then((response) => {
        getDecks();
      });
  };

  return (
    <>
      <h1>Welcome to Cardify!</h1>
      <div className="fullbody">
        <div className="sidebar">
          <div className="profile">
            <img src="" id=""></img>
            <h3>User name</h3>
            <h6>edit profile</h6>
          </div>
          <hr />
          <div className="decksSection">
            <div className="deckSidebar">
              <h4>Deck Name Here</h4>
            </div>
            <div className="deckSidebar">
              <h4>Deck Name Here</h4>
            </div>
            <div className="deckSidebar">
              <h4>Deck Name Here</h4>
            </div>
          </div>
          <hr />
          <div className="seachSection">
            <h4>Search Bar Section</h4>
          </div>
        </div>
        <div className="workSpace">
          <Add handleCreate={handleCreate} />
          <div className="decks">
            {decks.map((deck) => {
              return (
                <div className="deck" key={deck.id}>
                  <h4>Title: {deck.title}</h4>
                  <h4>Subject: {deck.subject}</h4>
                  <h4>Comments: {deck.comments}</h4>
                  <Edit handleUpdate={handleUpdate} deck={deck} />
                  <button onClick={handleDelete} value={deck.id}>
                    X
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
