import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
// import Add from "./components/Add";
// import Edit from "./components/Edit";
import "./App.css";
// import Deck from "./components/Deck";
import "./components/Card.css";
// import Card from "./components/Card";
// import AddCard from "./components/AddCard";
import Home from "./components/Home";
import Profile from "./components/Profile";

const App = () => {
  let [decks, setDecks] = useState([]);
  const [cards, setCards] = useState([]);

  const getDecks = () => {
    axios.get("http://localhost:8000/api/decks").then((response) => {
      setDecks(response.data);
      console.log(response.data);
    });
  };
  const getCards = () => {
    axios.get("http://localhost:8000/api/cards").then((response) => {
      console.log(response.data);
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
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;

// updated
