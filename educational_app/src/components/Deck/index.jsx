import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card} from 'react-bootstrap';
import './style.css'

const Deck = ({ id, deck, name, description, create_date, visibility, category}) => {
console.log(id, deck, name, description, create_date, visibility, category)
// console.log('deck line 8 ',deck)
const navigate = useNavigate()

  const formatDate = (date) => {
    return new Date(date).toLocaleString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }
    const handleDeckClick = () => {
      navigate(`/flashcard/${category.toLowerCase()}`);
    };


  return (
    <div className=' py-5 Deck'>
    <Container className='d-flex justify-content-center deck-container'>
      <Card  className='p-5 d-flex flex-column align-items-center deck-card  w-75' onClick={handleDeckClick}>
        <div>
          
        </div>

      <h2>{deck}</h2>
      <p>Description: {description}</p>
      {/* <p>Visibility: {visibility}</p> */}
      <p>Created By: {name}</p>
      <p>Category: {category}</p>
      <p>Created Date: {formatDate(create_date)}</p> 
       <button onClick={handleDeckClick}>View Flashcards</button>
      
      </Card>
    </Container>
  </div>
  )
}

export default Deck



