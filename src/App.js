import React, { useState, useEffect } from "react";
import axios from "axios";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Deck from "./components/Deck";
import Card from "./components/Card";
import AddCard from "./components/AddCard";
import "./components/Card.css";
import "./App.css";

// const googleLogin = async (accesstoken) => {
//   let res = await axios.post("http://localhost:8000/rest-auth/google/", {
//     access_token: accesstoken,
//   });

//   return res.data.key;
// };

const App = () => {
  // const [token, setToken] = useState(null);
  let [decks, setDecks] = useState([]);
  const [cards, setCards] = useState([]);

  const getDecks = () => {
    axios.get("http://localhost:8000/api/decks").then((response) => {
      setDecks(response.data);
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
    <>
      <div className="header" onClick={getCards}>
        <h1>Welcome to Cardify!</h1>
      </div>
      <hr />
      <div className="decksSection">
        <div className="deckSidebar">
          <h4>Deck Name Here</h4>
        </div>
        <div className="workSpace">
          <Add getDecks={getDecks} />
          {cards.map((card) => {
            return <Card getCards={getCards} card={card} />;
          })}
          <div className="decks">
            {decks.map((deck) => {
              return (
                <>
                  <div className="deck" key={deck.id}>
                    <Deck getDecks={getDecks} deck={deck} />
                    <Edit getDecks={getDecks} deck={deck} />
                  </div>
                  <AddCard deck={deck} getDecks={getDecks} />
                </>
              );
            })}
          </div>
        </div>
      </div>
      <hr />
      <div className="seachSection">
        <h4>Search Bar Section</h4>
      </div>
      <div className="workSpace">
        <Add getDecks={getDecks} />
        <div className="decks">
          {decks.map((deck) => {
            return (
              <>
                <div className="deck" key={deck.id}>
                  <h4>Title: {deck.title}</h4>
                  <h4>Subject: {deck.subject}</h4>
                  <h4>Comments: {deck.comments}</h4>
                  <Edit deck={deck} getDecks={getDecks} />
                </div>
                <AddCard deck={deck} getDecks={getDecks} />
              </>
            );
          })}
        </div>
        {/* CARDS SECTION */}
      </div>
    </>
  );
};
export default App;

// updated
