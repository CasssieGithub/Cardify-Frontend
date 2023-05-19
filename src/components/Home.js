// import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <>
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
      <div className="body">
        <div className="landingBodyTxt">
          <h4 className="title">Introducing Cardify:</h4>
          <h2 className="title">
            The Perfect App for Custom Flashcards and Organized Learning!
          </h2>
          <p className="paragraph">
            Cardify is the ultimate app for creating and organizing your own
            personalized flashcards. Whether you're a student, professional, or
            simply eager to expand your knowledge, Cardify empowers you to take
            control of your learning journey. With its user-friendly interface,
            you can effortlessly create custom cards and organize them into
            separate decks based on subjects, chapters, or any other
            categorization that suits your needs.
          </p>
          <button className="CTA">
            <Link className="link" to="/profile">
              <h1 className="navBarTxt">Profile page</h1>
            </Link>
          </button>
        </div>
      </div>
      <footer>
        <div>
          <h2 id="contact">CONTACT</h2>
          <div id="footer">
            <div id="col">
              <h3>Cardify</h3>
              <p>1105 Claire ave,</p>
              <p>Austin, TX 78703</p>
            </div>
            <div id="col">
              <p>T: 512-961-6519</p>
              <p>F: 866-272-5060</p>
              <p>Email: cardify@email.com</p>
            </div>
            <div id="col">
              <p>Subscribe to our Newsletter</p>
              <form>
                <input type="input" placeholder="Enter your email here" />
                <input type="submit" />
              </form>
            </div>
          </div>
          <p id="footer">
            Cassandra Hernandez | Dominique Clark | Youssef Shabo © 2023
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
