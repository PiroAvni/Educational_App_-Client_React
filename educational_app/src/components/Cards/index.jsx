import React, { useState } from 'react'
import { GrPrevious, GrNext } from 'react-icons/gr'
import './style.css'

const Flashcard = ({ flashcards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [showSolution, setShowSolution] = useState(false)

  const handleNextCard = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
      setShowSolution(false)
    }
  }

  const handlePrevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1)
      setShowSolution(false)
    }
  }

  const handleFlip = () => {
    setShowSolution(!showSolution)
  }

  return (
    <div>
      <h2 className='flashcard-title'>Flashcards</h2>

      <div className='flashcard-container'>
        <div className={`flashcard ${showSolution ? 'flipped' : ''}`}>
          <div className='front'>
            <h3>Question:</h3>
            <div divider ></div>
            <p>{flashcards[currentCardIndex].frontContent}</p>
            <button onClick={handleFlip}>Show Solution</button>
          </div>
          <div className='back'>
            <h3>Answer:</h3>
            <div divider ></div>
            <p>{flashcards[currentCardIndex].backContent}</p>
            <button onClick={handleFlip}>Show Question</button>
          </div>
        </div>
      </div>

      <div>
        <div className='button-cardindex-container'>
          <button
            className='flashcard-btn-directions'
            onClick={handlePrevCard}
            disabled={currentCardIndex === 0}
          >
            <GrPrevious />
          </button>
          <p className='card-index'>
            Card {currentCardIndex + 1} of {flashcards.length}
          </p>
          <button
            className='flashcard-btn-directions'
            onClick={handleNextCard}
            disabled={currentCardIndex === flashcards.length - 1}
          >
            <GrNext />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Flashcard
