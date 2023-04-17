import "./Profile.css";
import Card from "./Card";
import Deck from "./Deck";
import AddCard from "./AddCard";
import Edit from "./Edit";
import "./Home.css";
import "./Profile.css";
import { Link } from "react-router-dom";
import Add from "./Add";

const Profile = (props) => {
  return (
    <div>
      <div>
        <div className="navBar">
          <img className="logo" src="./Cardify.png" />
          <div className="navBarItems">
            <Link className="link" to="/profile">
              <h1 className="navBarTxt">Profile page</h1>
            </Link>
            <Link className="link" to="/">
              <h1 className="navBarTxt">Home</h1>
            </Link>
          </div>
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
                </div>
                <AddCard deck={deck} getDecks={props.getDecks} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Profile;
