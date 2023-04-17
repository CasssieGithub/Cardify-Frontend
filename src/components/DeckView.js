import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route, useParams } from "react-router-dom";
import "./DeckView.css";

const DeckView = (props) => {
  let { deckId } = useParams();

  const findDeckById = props.decks.find((deck) => {
    return deckId === deck._id;
  });

  const findCardsByUserId = props.cards.filter((card) => {
    return deckId === card.deckId;
  });

  return (
    <div>
      <div>
        <Link to="/">Home </Link>
      </div>
      <div>
        {findDeckById ? <div>HI THERE</div> : <>Loading...</>}
        <div>hi</div>;
      </div>
    </div>
  );
};

export default DeckView;
