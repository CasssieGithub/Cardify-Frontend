import React from "react";
import { useState, useEffect } from "react";
import Deck from "./Deck";
import Add from "./Add";

const Filter = ({ decks }) => {
  //   const [decks, setDecks] = useState([]);
  const [deckSubjects, setDeckSubjects] = useState([]);
  const [filteredDecks, setFilteredDecks] = useState(decks);
  const subjects = ["science", "social", "math", "english"];

  //-----------------------------------
  //           FILTER DECKS
  //-----------------------------------
  const handleFilter = (subjects) => {
    const filteredDecks = decks
      .filter((deck) => deck.subject === subjects)
      .map((filteredDeck) => filteredDeck.title);
    setFilteredDecks(filteredDecks);
    console.log(filteredDecks);
  };

  return (
    <>
      <div id="filter">
        <div className="decksSection">
          <div className="deckSidebar" onClick={() => handleFilter("science")}>
            <img className="subjectLogo" src="./subjects/atom.svg" />
            <h5 id="typeText">Science Decks</h5>
          </div>
          <div className="deckSidebar" onClick={() => handleFilter("social")}>
            <img className="subjectLogo" src="./subjects/globe.svg" />
            <h5 id="typeText">Social Studies Decks</h5>
          </div>
          <div className="deckSidebar" onClick={() => handleFilter("math")}>
            <img className="subjectLogo" src="./subjects/geometry.svg" />
            <h5 id="typeText">Math Decks</h5>
          </div>
          <div className="deckSidebar" onClick={() => handleFilter("english")}>
            <img className="subjectLogo" src="./subjects/book.svg" />
            <h5 id="typeText">English Decks</h5>
          </div>

          <ul>
            {filteredDecks.length > 0
              ? filteredDecks.map((deck, index) => {
                  <li key={index}>{deck}</li>;
                  <Deck deck={deck} />;
                })
              : decks.map((deck, index) => <li key={index}>{deck.title}</li>)}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Filter;
