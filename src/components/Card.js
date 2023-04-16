import React, { useState, useEffect } from "react";
import anime from "animejs";
import axios from "axios";

function Card(props) {
  const [playing, setPlaying] = useState(false);
  const [cards, setCards] = useState([]);

  const getCards = () => {
    axios.get("http://localhost:8000/api/cards").then((response) => {
      setCards(response.data);
    });
  };
  useEffect(() => {
    getCards();
  }, []);
  const handleClick = () => {
    if (playing) return;

    setPlaying(true);

    anime({
      targets: `.${props.id}`, // use the id prop to target the current card
      scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
      rotateY: { value: "+=180", delay: 200 },
      easing: "easeInOutSine",
      duration: 400,
      complete: function (anim) {
        setPlaying(false);
      },
    });
  };

  {
    cards.map((card) => {
      return (
        <>
          <div>
            <h1>{card.question}</h1>
          </div>
          <div className="card-container">
            <div id="card" className={`card ${card.id}`} onClick={handleClick}>
              {/* Card front */}
              <div className="card-front">
                <p>{card.question}</p>
              </div>

              {/* Card back */}
              <div className="card-back">
                <p>{card.answer}</p>
              </div>
            </div>
          </div>
        </>
      );
    });
  }
}
export default Card;
