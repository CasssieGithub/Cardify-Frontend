import "./Profile.css";
import Card from "./Card";
import Deck from "./Deck";
import AddCard from "./AddCard";
import Edit from "./Edit";
import Add from "./Add";
import { Link } from "react-router-dom";
import DeckView from "./DeckView";

const Profile = (props) => {
  return (
    <div>
      <div>
        <Link to="/deckView">View decks</Link>;
        <div className="header" onClick={props.getCards}>
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
        </div>
      </div>
      <div className="workSpace">
        {props.cards.map((card) => {
          return <Card getCards={props.getCards} card={card} />;
        })}
        <div className="decks">
          {props.decks.map((deck) => {
            return (
              <div>
                <div className="deck" key={deck.id}>
                  <Add getDecks={props.getDecks} deck={deck} />
                  <Deck getDecks={props.getDecks} deck={deck} />
                  <Edit getDecks={props.getDecks} deck={deck} />
                  {/* <DeckView getDecks={props.getDecks} deck={deck} /> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Profile;
