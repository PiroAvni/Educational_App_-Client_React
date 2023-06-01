import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card} from 'react-bootstrap';
import './style.css'

const CategoryCard = ({  idx, name, categoryId }) => {

    console.log(name)

  let navigate =useNavigate()

    const handleDeckClick = (categoryId) => {
      navigate(`/decks/${categoryId}`);
    };
  return (
    <div className=' py-5 Deck'>
    <Container className='d-flex justify-content-center deck-container'>
      <Card  className='p-5 d-flex flex-column align-items-center deck-card  w-75' onClick={handleDeckClick}>
        <div>
          
        </div>

      <h2>{name}</h2>
      
       {/* <button onClick={handleDeckClick}>View Flashcards</button> */}
      
      </Card>
    </Container>
  </div>
  )
}

export default CategoryCard