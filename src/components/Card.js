import React, { useState } from "react";
import anime from "animejs";

function Card(props) {
  const [playing, setPlaying] = useState(false);
  const [frontText, setFrontText] = useState("");
  const [backText, setBackText] = useState("");

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

  const handleFrontChange = (event) => {
    setFrontText(event.target.value);
  };

  const handleBackChange = (event) => {
    setBackText(event.target.value);
  };

  return (
    <div className="card-container">
      <div id="card" className={`card ${props.id}`} onClick={handleClick}>
        {/* Card front */}
        <div className="card-front">
          <p>{props.front}</p>
        </div>

        {/* Card back */}
        <div className="card-back">
          <p>{props.back}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
