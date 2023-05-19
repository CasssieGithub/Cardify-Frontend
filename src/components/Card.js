import React, { useState } from "react";
import anime from "animejs";
import axios from "axios";

const Card = (props) => {
  const [playing, setPlaying] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/api/cards/${props.card.id}`)
      .then((response) => {
        props.getCards();
      });
  };

  const handleClick = () => {
    if (playing) return;

    setPlaying(true);

    anime({
      targets: `.${props.card.id}`,
      scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
      rotateY: { value: "+=180", delay: 200 },
      easing: "easeInOutSine",
      duration: 400,
      complete: function (anim) {
        setPlaying(false);
        setFlipped(!flipped);
      },
    });
  };

  return (
    <div class="cardsDisplay">
      <div className="card-container">
        <div
          className={`card ${props.card.id} ${flipped ? "flipped" : ""}`}
          onClick={handleClick}
        >
          <div className="card-front">
            <div className="answers">
              <h6>Question:</h6>
            </div>
            <h3>{props.card.question}</h3>
          </div>
          <div className="card-back">
            <div className="answers">
              <h6>Answer:</h6>{" "}
            </div>
            <h3 className="answerTxt">{props.card.answer}</h3>
            <img className="answerImg" src={props.card.image} alt="" />

            <div className="trashIcon">
              <img
                className="trashCan"
                src="../delete.png"
                onClick={handleDelete}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
