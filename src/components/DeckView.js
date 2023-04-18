import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route, useParams } from "react-router-dom";
import "./DeckView.css";
// import axios from "axios";
import AddCard from "./AddCard";
import Card from "./Card";

const DeckView = (props) => {
  let { deckId } = useParams();

  const findDeckById = props.decks.find((deck) => {
    return +deckId === deck.id;
  });
  //   console.log(+deckId, findDeckById);

  const findCardsByUserId = props.cards.filter((card) => {
    return +deckId === card.deck;
  });
  console.log(props.cards, findCardsByUserId);

  return (
    <div>
      <div>
        <Link to="/">Home </Link>
      </div>
      <div>
        {findDeckById ? (
          <div>
            <AddCard findDeckById={findDeckById} getCards={props.getCards} />
            {findCardsByUserId.map((card) => {
              return <Card getCards={props.getCards} card={card} />;
            })}
          </div>
        ) : (
          <>Loading...</>
        )}
      </div>
    </div>
  );
};

export default DeckView;
