import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchFlashcard } from '../../slices/cardSlice/flashcardSlice';
import axios from 'axios';
import Flashcard from '../../components/Cards/index';

import './style.css';

const FlashCards = () => {
  const dispatch = useDispatch();
  const { flashcards, loading, error } = useSelector((state) => state.flashcard);
  // const { deckId } = useParams();

  // useEffect(() => {
  //   dispatch(fetchFlashcard(Id)); // Fetch flashcards with the deck ID
  // }, [dispatch, Id]);

  console.log('FLASH---CARD', flashcards)
  const [progressData, setProgressData] = useState({
    userId: '',
    deckId: '',
    cardsReviewed: [],
    lastReviewedAt: null,
    progressPercentage: 0,
    completionStatus: 'incomplete',
  });

  const handleReview = (response) => {
    setProgressData((prevData) => ({
      ...prevData,
      cardsReviewed: [...prevData.cardsReviewed, response.cardId],
      lastReviewedAt: new Date(),
      progressPercentage: calculateProgressPercentage(),
    }));
  };

  const calculateProgressPercentage = () => {
    const { cardsReviewed } = progressData;
    const totalCards = cardsReviewed.length;
    const totalDeckCards = flashcards.length; // Assuming the number of flashcards is the total deck cards
    return totalCards > 0 ? Math.floor((totalCards / totalDeckCards) * 100) : 0;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/progress', progressData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flashcards-container'>
   

      {flashcards.length > 0 ? (
        <Flashcard
          flashcards={flashcards}
          frontContentKey="front" // Replace "front" with the actual key for the front content in your flashcard data
          backContentKey="back" // Replace "back" with the actual key for the back content in your flashcard data
        />
      ) : (
        <p>No flashcards available</p>
      )}

      <button onClick={() => handleReview({ cardId: 'card1' })}>Review Card 1</button>

      <button onClick={handleSubmit}>Submit Progress</button>
    </div>
  );
};

export default FlashCards;


