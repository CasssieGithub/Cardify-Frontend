import "./Profile.css";
import Card from "./Card";
import Deck from "./Deck";
import AddCard from "./AddCard";
import Edit from "./Edit";
import "./Home.css";
import "./Profile.css";
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
                  <img className="subjectLogo" src="./subjects/geometry.svg" />
                  <h5>Geometry Deck</h5>
                </div>
                <div className="deckSidebar">
                  <img className="subjectLogo" src="./subjects/atom.svg" />
                  <h5>Chemistry Deck</h5>
                </div>
                <div className="deckSidebar">
                  <img className="subjectLogo" src="./subjects/art.svg" />
                  <h5>Arts Deck</h5>
                </div>
                <div className="deckSidebar">
                  <img className="subjectLogo" src="./subjects/book.svg" />
                  <h5>Literature Deck</h5>
                </div>
                <div className="deckSidebar">
                  <img className="subjectLogo" src="./subjects/globe.svg" />
                  <h5>Geography Deck</h5>
                </div>
              </div>
              <hr />
              <div className="seachSection">
                <h5>Search Bar Section</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="workSpace">
          <Add getDecks={props.getDecks} />
          {props.cards.map((card) => {
            return <Card getCards={props.getCards} card={card} />;
          })}
          <div className="decks">
            {props.decks.map((deck) => {
              return (
                <div>
                  <div className="deck" key={deck.id}>
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
    </div>
  );
};
export default Profile;
