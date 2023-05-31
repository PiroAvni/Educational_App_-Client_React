import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card} from 'react-bootstrap';
import './style.css'

const Deck = ({title, img, deck}) => {


  let navigate =useNavigate()

    const handleDeckClick = () => {
      navigate(`/flashcards/${deck._id}`);
    };
  return (
    <div className=' py-5 Deck'>
    <Container className='d-flex justify-content-center deck-container'>
      <Card  className='p-5 d-flex flex-column align-items-center deck-card  w-75' onClick={handleDeckClick}>
        <div>
          <div className="deck-logo">{img}</div> 
          <h1>{title}</h1>
        </div>

      {/* <h2>{deck.title}</h2>
      <p>{deck.description}</p>
      <p>Visibility: {deck.visibility}</p>
      <p>Created By: {deck.userId}</p>
      <p>Category: {deck.categoryId}</p>
      <p>Created Date: {deck.create_date}</p> */}
      {/* <button onClick={handleDeckClick}>View Flashcards</button> */}
      
      </Card>
    </Container>
  </div>
  )
}

export default Deck



