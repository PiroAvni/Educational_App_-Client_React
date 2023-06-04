import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFlashcard } from '../../slices/cardSlice/flashcardSlice';
import './style.css';

const Deck = ({ id, deck, name, description, create_date, visibility, category }) => {
  console.log('Deck', id,)
  const dispatch = useDispatch();
 
  const { decks, loading, error } = useSelector((state) => state.decks);
  
  // const {id } = useParams();
  console.log('SLASH-CARD;',decks)
  const navigate = useNavigate();

  const formatDate = (date) => {
    return new Date(date).toLocaleString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const handleDeckClick = () => {
    dispatch(fetchFlashcard(id)); // Pass the deck ID to the fetchFlashcard action
    navigate(`/decks/flashcard/${id}`); // Navigate to the flashcard screen with the deck ID
  };

  return (
    <div className='py-5 Deck'>
      <Container className='d-flex justify-content-center deck-container'>
        <Card className='p-5 d-flex flex-column align-items-center deck-card w-75' onClick={() => handleDeckClick(id)}>
          {/* <Link to={`/decks/flashcard/${id}`}> */}
            <h2>{deck}</h2>
          {/* </Link> */}
          <p>Description: {description}</p>
          <p>Visibility: {visibility}</p>
          <p>Created By: {name}</p>
          <p>Category: {category}</p>
          <p>Created Date: {formatDate(create_date)}</p>
          {/* <button onClick={() => handleDeckClick(id)}>View Flashcards</button> */}
        </Card>
      </Container>
    </div>
  );
};

export default Deck;





