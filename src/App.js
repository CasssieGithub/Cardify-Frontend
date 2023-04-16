import React, { useState, useEffect } from "react";
import axios from "axios";
import Add from "./components/Add";
import Edit from "./components/Edit";
import "./App.css";

// import { GoogleLogin } from "@react-oauth/google";

import "./components/Card.css";
import Card from "./components/Card";
import AddCard from "./components/AddCard";

// const googleLogin = async (accesstoken) => {
//   let res = await axios.post("http://localhost:8000/rest-auth/google/", {
//     access_token: accesstoken,
//   });

//   return res.data.key;
// };

function App() {
  // const [token, setToken] = useState(null);
  let [decks, setDecks] = useState([]);

  const getDecks = () => {
    axios.get("http://localhost:8000/api/decks").then((response) => {
      setDecks(response.data);
    });
  };

  useEffect(() => {
    getDecks();
  }, []);

  // ============================================================
  //                        DELETE FUNCTION
  // ============================================================
  const handleDelete = (event) => {
    axios
      .delete("http://localhost:8000/api/decks/" + event.target.value)
      .then((response) => {
        getDecks();
      });
  };
  // ============================================================
  //                        EDIT FUNCTION
  // ============================================================
  const handleUpdate = (editDeck) => {
    console.log(editDeck);
    axios
      .put("http://localhost:8000/api/decks/" + editDeck.id, editDeck)
      .then((response) => {
        getDecks();
      });
  };

  return (
    <>
      {/* {!token ? (
        <div className="googleSignInPage">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              googleLogin(credentialResponse.credential).then((token) => {
                setToken(token);
              });
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
      ) : (
        <> */}
      <div className="header">
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
        <div className="workSpace">
          <Add getDecks={getDecks} />
          <div className="decks">
            {decks.map((deck) => {
              return (
                <>
                  <div className="deck" key={deck.id}>
                    <h4>Title: {deck.title}</h4>
                    <h4>Subject: {deck.subject}</h4>
                    <h4>Comments: {deck.comments}</h4>
                    <Edit handleUpdate={handleUpdate} deck={deck} />
                    <button onClick={handleDelete} value={deck.id}>
                      X
                    </button>
                  </div>
                  <AddCard deck={deck} getDecks={getDecks} />
                  <Card />
                </>
              );
            })}
          </div>
          {/* CARDS SECTION */}
        </div>
      </div>
    </>
  );
}
//   </>
// );
// }
export default App;

// updated
