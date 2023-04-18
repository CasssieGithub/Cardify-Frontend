import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import "./components/Card.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import DeckView from "./components/DeckView";

const App = () => {
  let [decks, setDecks] = useState([]);
  const [cards, setCards] = useState([]);

  const getDecks = () => {
    axios.get("http://localhost:8000/api/decks").then((response) => {
      setDecks(response.data);
      // console.log(response.data);
    });
  };
  const getCards = () => {
    axios.get("http://localhost:8000/api/cards").then((response) => {
      // console.log(response.data);
      setCards(response.data);
    });
  };

  useEffect(() => {
    getDecks();
    getCards();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home getCards={getCards} />} />

        <Route
          path="/profile"
          element={
            <Profile
              getCards={getCards}
              getDecks={getDecks}
              cards={cards}
              decks={decks}
              xs
            />
          }
        />
        <Route
          path="/deckView/:deckId"
          element={<DeckView cards={cards} decks={decks} getCards={getCards} />}
        />
      </Routes>
    </div>
  );
};

export default App;

{
  /* <Route
          path="/add/:deckid"
          // element={<AddCard deck={deck} getDecks={props.getDecks} />}
        /> */
}

// updated
