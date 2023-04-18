import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
// import Deck from "./Deck";

const Deck = (props) => {
  const [decks, setDecks] = useState([])

  const getDecks = () => {
    axios.get('http://localhost:8000/api/decks').then((response) => {
      setDecks(response.data)
    })
  }
  {decks.map((deck) => {
  return (
    <div className="deckdiv">
      <h3>{deck.title}</h3>
      <h4>Subject: {deck.subject}</h4>
      <h4>Class: {deck.classs}</h4>
      <h4>Topic: {deck.topic}</h4>
      <h5>Comments: {deck.comments}</h5>
    </div>
  );
})}
};

export default Deck;

// function CardList() {
// const [isTransitioning, setIsTransitioning] = useState(false);

// const handleCardClick = () => {
//   setIsTransitioning((prev) => !prev);
// };

// return (
//   <>
//     <ul
//       className={`cards-split${isTransitioning ? " transition" : ""}`}
//       onClick={handleCardClick}
//     >
//       {/* Split card list content */}
//     </ul>
//   </>
// );
// }
