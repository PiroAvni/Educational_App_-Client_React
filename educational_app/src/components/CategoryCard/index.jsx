import React ,{useState} from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { Container, Card} from 'react-bootstrap';
import './style.css'

const CategoryCard = ( { name, decks} ) => {

    console.log('cat card:', decks)
   

    const ids = decks.map((item)=> item.categoryID._id)

    console.log('IDS:',ids)

  let navigate =useNavigate()
    const handleDeckClick = (ids) => {
    
      navigate(`/deck/${ids}`);
    };
  return (
    <div className=' py-5 Deck'>
    <Container className='d-flex justify-content-center deck-container'>
      <Card  className='p-5 d-flex flex-column align-items-center deck-card  w-75' onClick={handleDeckClick}>
        <div>
          
        </div>

      <h2>{name}</h2>
      
     
      
      </Card>
    </Container>
  </div>
  )
}

export default CategoryCard