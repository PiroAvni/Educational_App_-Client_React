import Flashcard from '../../components/Cards/index';

const flashcards = [
  { question: 'What is the capital of France?', answer: 'Paris' },
  { question: 'What is the largest planet in our solar system?', answer: 'Jupiter' },
  { question: 'Who painted the Mona Lisa?', answer: 'Leonardo da Vinci' },
];

const FlashCards = () => {
  return (
    <div>
      <h1>Flashcard App</h1>
      <Flashcard flashcards={flashcards} />
    </div>
  );
};

export default FlashCards;