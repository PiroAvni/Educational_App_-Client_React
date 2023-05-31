import{ useState } from 'react';
import FlashCards from '../../screens/FlashCards/index'
import './style.css'
const Flashcard = ({ flashcards }) => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [showSolution, setShowSolution] = useState(false);
  
    const handleNextCard = () => {
      if (currentCardIndex < flashcards.length - 1) {
        setCurrentCardIndex(currentCardIndex + 1);
        setShowSolution(false);
      }
    };
  
    const handlePrevCard = () => {
      if (currentCardIndex > 0) {
        setCurrentCardIndex(currentCardIndex - 1);
        setShowSolution(false);
      }
    };
  
    const handleFlip = () => {
      setShowSolution(!showSolution);
    };
  
    return (
      <div>
        <h2>Flashcards</h2>
        <div>
          <p>
            Card {currentCardIndex + 1} of {flashcards.length}
          </p>
          <div>
            <button onClick={handlePrevCard} disabled={currentCardIndex === 0}>
              Previous Card
            </button>
            <button onClick={handleNextCard} disabled={currentCardIndex === flashcards.length - 1}>
              Next Card
            </button>
          </div>
        </div>
        <div className="flashcard-container">
          <div className={`flashcard ${showSolution ? 'flipped' : ''}`}>
            <div className="front">
              <h3>Question:</h3>
              <p>{flashcards[currentCardIndex].question}</p>
              <button onClick={handleFlip}>Show Solution</button>
            </div>
            <div className="back">
              <h3>Answer:</h3>
              <p>{flashcards[currentCardIndex].answer}</p>
              <button onClick={handleFlip}>Show Question</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Flashcard;