import { useState } from "react";
import axios from "axios";

function AddCard(props) {
  const [deck, setDeck] = useState(props.decks[0].id);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const card = { deck, question, answer, image };
    props.onSubmit(card);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="deck">Deck:</label>
        <select
          id="deck"
          value={deck}
          onChange={(event) => setDeck(event.target.value)}
        >
          {props.decks.map((deck) => (
            <option key={deck.id} value={deck.id}>
              {deck.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="question">Question:</label>
        <input
          id="question"
          type="text"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="answer">Answer:</label>
        <input
          id="answer"
          type="text"
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          type="text"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default AddCard;
