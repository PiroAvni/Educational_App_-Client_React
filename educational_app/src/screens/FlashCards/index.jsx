import { useState } from 'react'
import Flashcard from '../../components/Cards/index'
import './stsyle.css'

const flashcards = [
  { question: 'What is the capital of France?', answer: 'Paris' },
  {
    question: 'What is the largest planet in our solar system?',
    answer: 'Jupiter',
  },
  { question: 'Who painted the Mona Lisa?', answer: 'Leonardo da Vinci' },
]

const FlashCards = () => {
  const [progressData, setProgressData] = useState({
    userId: '',
    deckId: '',
    cardsReviewed: [],
    lastReviewedAt: null,
    progressPercentage: 0,
    completionStatus: 'incomplete',
  })

  const [flashcards, setFlashCards] = useState([])
  const handleReview = (response) => {
    // Update the progress data based on user interactions
    setProgressData((prevData) => ({
      ...prevData,
      cardsReviewed: [...prevData.cardsReviewed, response.cardId],
      lastReviewedAt: new Date(),
      progressPercentage: calculateProgressPercentage(),
    }))
  }

  const calculateProgressPercentage = () => {
    // Calculate and return the progress percentage based on the reviewed cards
    // This calculation will depend on your specific logic and requirements
    // You can calculate the progress percentage based on the total number of cards reviewed
    // and the total number of cards in the deck or any other criteria you define.
    // For example:
    const { cardsReviewed } = progressData
    const totalCards = cardsReviewed.length
    const totalDeckCards = 50 // Assuming the deck has 50 cards
    return totalCards > 0 ? Math.floor((totalCards / totalDeckCards) * 100) : 0
  }

  const handleSubmit = async () => {
    try {
      // Send a POST request to the API endpoint to submit the progress data
      const response = await axios.post(
        'https://educational-server-qq6d.onrender.com/api/progress',
        progressData
      )
      console.log(response.data) // Handle the response as needed
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='flashcards-container'>
      <h1>Flashcard App</h1>
      <Flashcard flashcards={flashcards} />

      <button onClick={() => handleReview({ cardId: 'card1' })}>
        Review Card 1
      </button>
      <button onClick={() => handleReview({ cardId: 'card2' })}>
        Review Card 2
      </button>

      <button onClick={handleSubmit}>Submit Progress</button>
    </div>
  )
}

export default FlashCards
