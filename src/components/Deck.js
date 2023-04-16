import React, { useState, useEffect } from "react";

const Deck = (props) => {
  
// useEffect(() => {
//   props.getDecks()
// })

  return (
    <div class='deckdiv'>
      <h3>Deck {props.deck.title}</h3>
      <h4>Subject: {props.deck.subject}</h4>
      <h4>Class: {props.deck.classs}</h4>
      <h4>Topic: {props.deck.topic}</h4>
      <h5>Comments: {props.deck.comments}</h5>
    </div>
  )
  }

  export default Deck

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
