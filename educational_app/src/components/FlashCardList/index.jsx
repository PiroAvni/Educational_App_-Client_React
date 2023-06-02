import Flashcard from '../FlashCard/index'

export default function FlashcardList({ flashcards, flip, setCount }) {
  return (
    <div className='card-grid'>
      {flashcards.map((flashcard) => {
        return (
          <Flashcard
            flashcard={flashcard}
            key={flashcard.id}
            setCount={setCount}
          />
        )
      })}
    </div>
  )
}
