import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route, useParams } from "react-router-dom";
import "./DeckView.css";
import "./Home.css";
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
        <div className="navBar">
          <img className="logo" src="../Cardify.png" />
          <div className="navBarItems">
            <Link className="link" to="/profile">
              <h1 className="navBarTxt">Profile page</h1>
            </Link>
            <Link className="link" to="/">
              <h1 className="navBarTxt">Home</h1>
            </Link>
          </div>
        </div>
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
