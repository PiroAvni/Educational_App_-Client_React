import { useState } from 'react';

const FlashcardForm = () => {
  const [flashcards, setFlashcards] = useState([{ front: '', back: '' }]);
  const [category, setCategory] = useState('');
  const [deckTitle, setDeckTitle] = useState('');
  const [description, setDescription] = useState('');
  const [notification, setNotification] = useState('');

  const handleFlashcardChange = (index, field, value) => {
    const updatedFlashcards = [...flashcards];
    updatedFlashcards[index][field] = value;
    setFlashcards(updatedFlashcards);
  };

  const handleAddFlashcard = () => {
    setFlashcards([...flashcards, { front: '', back: '' }]);
  };

  const handleSubmit = async () => {
    try {
      // Send data to the backend API
      const response = await fetch('/api/submit-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ flashcards, category, deckTitle, description }),
      });

      if (response.ok) {
        // Data submitted successfully
        setNotification('Flashcard successfully added!');
        // Reset form fields
        setFlashcards([{ front: '', back: '' }]);
        setCategory('');
        setDeckTitle('');
        setDescription('');
      } else {
        // Error occurred while submitting data
        setNotification('An error occurred while adding the flashcard.');
      }
    } catch (error) {
      console.error('Error:', error);
      setNotification('An error occurred while adding the flashcard.');
    }
  };

  return (
    <div>
      <h2>Add Flashcard</h2>
      <form>
        <div>
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <label>Deck Title:</label>
          <input
            type="text"
            value={deckTitle}
            onChange={(e) => setDeckTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <h3>Flashcards:</h3>
        {flashcards.map((flashcard, index) => (
          <div key={index}>
            <label>Front:</label>
            <input
              type="text"
              value={flashcard.front}
              onChange={(e) =>
                handleFlashcardChange(index, 'front', e.target.value)
              }
            />
            <label>Back:</label>
            <input
              type="text"
              value={flashcard.back}
              onChange={(e) =>
                handleFlashcardChange(index, 'back', e.target.value)
              }
            />
          </div>
        ))}
        <button type="button" onClick={handleAddFlashcard}>
          Add Flashcard
        </button>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {notification && <p>{notification}</p>}
    </div>
  );
};

export default FlashcardForm;
