import {useState, useEffect} from 'react'

const editCard = () => {
    const [cards, setCards] = useState([])
    const [edit, setEdit] = useState(false)
    const [card, setCard] = useState({})

    const handleChange = (event) => {
        setCard({...card, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.put(`http://localhost:8000/cards/${card.id}`, card).then((response) => {
            getCards();
        })
    }
    const handleDelete = (event) => [
        axios.delete(`http://localhost:8000/cards/${card.id}`).then((response) => {
            getCards();
        })
    ]
    const handleEdit = () => {
        setEdit(!edit)
    }
    const getCards = () => {
      axios.get('http://localhost:8000/cards').then((response) => {
        setCards(response.data)
      })
    }
  useEffect(() => {
    getCards()
  }, [])

  {cards.map((card) => {
    return (
        <div>
            <h3>{card.question}</h3>
            <button onClick={handleDelete}>Delete Card</button>
            <button onClick={handleEdit}>Edit Card</button>
            {edit 
            ? <div>
                <h3>Add a New Card</h3>
                    <form className="AddCardForm" onSubmit={handleSubmit}>
                        <label htmlFor='question'> Question: </label>
                        <input type="text" name="question" placeholder="Enter question here" onChange={handleChange} />
                        <label htmlFor='answer'>Answer: </label>
                        <input type="text" name="answer" placeholder="Enter answer here" onChange={handleChange} />
                        <label htmlFor='image'>Image: </label>
                        <input type='text' name='image' placeholder='image adress' onChange={handleChange}/>
                        <button type="submit">Add Card</button>
                    </form>
            </div>
            : <></>}
        </div>
    )
  })}



}


export default editCard