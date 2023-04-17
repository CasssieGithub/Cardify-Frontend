import React, { useState, useEffect} from "react";
import anime from "animejs";
import axios from 'axios'

const Card = (props) => {
const handleDelete = () => {
  axios.delete(`http://localhost:8000/api/cards/${props.card.id}`).then((response) => {
    props.getCards()
  })
}
  
  // useEffect(() => {
  //   props.getCards()
  // }, [])

  

  

  return (

    <div>
      <h3>Question: {props.card.question}</h3>
      <h3>Answer: {props.card.answer}</h3>
      <img src={props.card.image} alt='answer'/>
      <button onClick={handleDelete}>Delete Card</button>
    </div>
    // <div className="card-container">
    //   <div id="card" className={`card ${card.id}`} onClick={handleClick}>
    //     {/* Card front */}
    //     <div className="card-front">
    //       <p>{card.question}</p>
    //     </div>

    //     {/* Card back */}
    //     <div className="card-back">
    //       <p>{card.answer}</p>
    //     </div>
    //   </div>
    // </div>
  );

}
export default Card;

// const [playing, setPlaying] = useState(false);

//const handleClick = () => {
  //   if (playing) return;

  //   setPlaying(true);

  //   anime({
  //     targets: `.${props.id}`, // use the id prop to target the current card
  //     scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
  //     rotateY: { value: "+=180", delay: 200 },
  //     easing: "easeInOutSine",
  //     duration: 400,
  //     complete: function (anim) {
  //       setPlaying(false);
  //     },
  //   });
  // };
