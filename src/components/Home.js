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
          <h1 className="navBarTxt">About</h1>
        </div>
      </div>
      <div className="body">
        <div className="landingBodyTxt">
          <h2 className="title">The Best Flashcards out there!</h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            mollis imperdiet facilisis. Aenean eu pulvinar nibh. Ut ac malesuada
            mi, vitae interdum sapien. Praesent et molestie mauris. Integer
            ultrices tellus et convallis laoreet. Nulla tempus sapien id neque
            congue, ut sagittis sapien mollis. Ut scelerisque ipsum eget
            convallis pulvinar. Interdum et malesuada fames ac ante ipsum primis
            in faucibus. Curabitur non eros venenatis, aliquam velit a,
            elementum nibh. Phasellus a posuere mi, quis iaculis justo. Fusce
            gravida, purus quis sodales vestibulum, metus risus vulputate erat,
            nec condimentum risus lacus luctus lacus.
          </p>
          <button className="CAT">
            <Link className="link" to="/profile">
              <h1 className="navBarTxt">Profile page</h1>
            </Link>
          </button>
        </div>
      </div>
      <footer>
        <div>
          <h2 id="contact">CONTACT</h2>
          <dev id="footer">
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
          </dev>
          <p id="footer">
            Dominique Clark | Cassandra Hernandez | Youssef Shabo © 2023
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
