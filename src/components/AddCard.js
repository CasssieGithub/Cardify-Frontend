import React, { useState } from "react";
import Card from "./Card";

function App() {
  const [cards, setCards] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const front = event.target.front.value;
    const back = event.target.back.value;

    setCards([...cards, { front, back }]);
    event.target.reset();
  };

  const renderCards = () => {
    return cards.map((card, index) => {
      return (
        <Card
          key={index}
          front={card.front}
          back={card.back}
          id={`card-${index}`}
        />
      );
    });
  };

  return (
    <div className="App cardAdd">
      <h3>Add a New Card</h3>
      <form className="AddCardForm" onSubmit={handleSubmit}>
        <label>
          Question:
          <input type="text" name="front" placeholder="Enter question here" />
        </label>
        <label>
          Answer:
          <input type="text" name="back" placeholder="Enter answer here" />
        </label>
        <button type="submit">Add Card</button>
      </form>
      {renderCards()}
    </div>
  );
}

export default App;
