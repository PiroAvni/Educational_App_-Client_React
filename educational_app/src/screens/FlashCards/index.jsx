import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Flashcard from '../../components/Cards/index'

import './style.css'

const FlashCards = () => {
  const { id } = useParams()
  const [progressData, setProgressData] = useState({
    userId: '',
    deckId: '',
    cardsReviewed: [],
    lastReviewedAt: null,
    progressPercentage: 0,
    completionStatus: 'incomplete',
  })
  const [flashcards, setFlashcards] = useState([])

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cards')
        console.log(response.data)
        const filteredFlashcards = response.data.filter(
          (card) => card.categoryID._id === id
        )

        setFlashcards(filteredFlashcards)
      } catch (error) {
        console.error(error)
      }
    }

    fetchFlashcards()
  }, [])

  console.log('FLASHCARDS', flashcards)

  const handleReview = (response) => {
    setProgressData((prevData) => ({
      ...prevData,
      cardsReviewed: [...prevData.cardsReviewed, response.cardId],
      lastReviewedAt: new Date(),
      progressPercentage: calculateProgressPercentage(),
    }))
  }

  const calculateProgressPercentage = () => {
    const { cardsReviewed } = progressData
    const totalCards = cardsReviewed.length
    const totalDeckCards = flashcards.length // Assuming the number of flashcards is the total deck cards
    return totalCards > 0 ? Math.floor((totalCards / totalDeckCards) * 100) : 0
  }

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/progress',
        progressData
      )
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='flashcards-container'>
      <h1>Flashcard App</h1>

      {
        flashcards.length > 0 && <Flashcard flashcards={flashcards} />
        // ) : (
        //   <p>No flashcards available</p>
        // )
      }

      <button onClick={() => handleReview({ cardId: 'card1' })}>
        Review Card 1
      </button>

      <button onClick={handleSubmit}>Submit Progress</button>
    </div>
  )
}

export default FlashCards
