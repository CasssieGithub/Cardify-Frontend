import "./Profile.css";
import Deck from "./Deck";
import Edit from "./Edit";
import "./Home.css";
import Add from "./Add";
import { Link } from "react-router-dom";
import DeckView from "./DeckView";
import Filter from "./Filter";


const Profile = (props) => {
  return (
    <div>
      <div>
        <div className="header" onClick={props.getCards}>
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
              <Filter decks={props.decks} />
              <hr />
              <div className="seachSection">
                <h5>Search Bar Section</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="workSpace">
          <Add getDecks={props.getDecks} />
          {/* {props.cards.map((card) => {
            return <Card getCards={props.getCards} card={card} />;
          })} */}
          <div className="decks">
            {props.decks.map((deck) => {
              return (
                <div>
                  <div className="deck" key={deck.id}>
                    <Link to={`/deckView/${deck.id}`}>View decks</Link>
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
