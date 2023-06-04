import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeck } from '../../slices/decks/deckSlice';
import { Deck } from '../../components';
import './style.css';

const DeckScreen = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { decks, loading, error } = useSelector((state) => state.decks);



  useEffect(() => {
    dispatch(fetchDeck());
  }, [dispatch]);

console.log('DS-13:',decks)

  const handleDeckClick = (decks) => {
    const deckId = decks._id; // Ensure that _id is correctly extracted from the deck object
    dispatch(fetchFlashcard(deckId)); // Pass the deck ID to the fetchFlashcard action
    navigate(`/flashcards/decks/${deckId}`); // Navigate to the flashcard screen with the deck ID
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1 className='deck-list'>Deck List</h1>
      {decks.map((deck,idx) => (
        // console.log(deck._id , idx)
        <Deck 
          key={deck._id}
          id={deck._id}
          deck={deck.title}
          name={deck.userId.name}
          category={deck.categoryId.name}
          description={deck.description}
          create_date={deck.create_date}
          onClick={() => handleDeckClick(deck)} // Pass the deck ID to handleDeckClick
        />
      ))}
    </div>
  );
};

export default DeckScreen;





