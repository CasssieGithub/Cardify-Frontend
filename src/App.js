import React, { useState, useEffect } from "react";
import axios from "axios";
import Add from "./components/Add";
import Edit from "./components/Edit";
import "./App.css";
import Deck from './components/Deck'
import "./components/Card.css";
import Card from "./components/Card";
import AddCard from "./components/AddCard";


const App = () => {
  let [decks, setDecks] = useState([]);
  const [cards, setCards] = useState([]) 

  const getDecks = () => {
    axios.get("http://localhost:8000/api/decks").then((response) => {
      setDecks(response.data);
      console.log(response.data)
    });
  };
  const getCards = () => {
    axios.get('http://localhost:8000/api/cards').then((response) => {
      console.log(response.data)
      setCards(response.data)
    })
  }

  useEffect(() => {
    getDecks();
    getCards();
  }, []);

  return (
    <>
          <div className="header" onClick={getCards}>
            <h1>Welcome to Cardify!</h1>
          </div>
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
              <Add getDecks={getDecks} />
              {cards.map((card) => {
                return (
                        <Card getCards={getCards} card={card}/>
                )
                      }
                  )}
              <div className="decks">
                {decks.map((deck) => {
                  return (<>
                    <div className="deck" key={deck.id}>
                      <Deck getDecks ={getDecks} deck={deck}/>
                      <Edit getDecks={getDecks} deck={deck}/>
                    </div>
                    <AddCard deck={deck} getDecks={getDecks}/>
                    
                    </>
                  );
                })}
              </div>
              {/* CARDS SECTION */}
              
            </div>
          </div>
        </>
      )}
  //   </>
  // );
// }
export default App;

// updated
