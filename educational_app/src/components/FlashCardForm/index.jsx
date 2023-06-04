import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './style.css'

const FlashcardForm = () => {
  const [flashcards, setFlashcards] = useState([
    { frontContent: '', backContent: '' },
  ]);
  const [category, setCategory] = useState('');
  const [deckTitle, setDeckTitle] = useState('');
  const [description, setDescription] = useState('');
  const [visibility, setVisibility] = useState('public');

  const { userInfo } = useSelector((state) => state.auth);

  const handleFlashcardChange = (index, field, value) => {
    const updatedFlashcards = [...flashcards];
    updatedFlashcards[index][field] = value;
    setFlashcards(updatedFlashcards);
  };

  const handleAddFlashcard = () => {
    setFlashcards([...flashcards, { frontContent: '', backContent: '' }]);
  };

  const handleVisibilityChange = (e) => {
    setVisibility(e.target.value);
  };

  const showToastMessageSuccess = () => {
    toast.success('Flashcard successfully added!', {
      position: toast.POSITION.TOP_RIGHT
    });
  };

  const showToastMessageError = () => {
    toast.error('An error occurred while adding the flashcard.', {
      position: toast.POSITION.TOP_RIGHT
    });
  };

  const handleSubmit = async () => {
    try {
      const categoryResponse = await fetch('http://localhost:5000/api/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: category }),
      });
      const categoryData = await categoryResponse.json();
      console.log(categoryData);

      const deckResponse = await fetch('http://localhost:5000/api/deck', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userInfo._id,
          categoryId: categoryData._id,
          title: deckTitle,
          description: description,
          visibility: visibility === 'public',
        }),
      });
      const deckData = await deckResponse.json();
      console.log(deckData);

      const cardPromises = flashcards.map((flashcard) => {
        return fetch('http://localhost:5000/api/cards', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            categoryID: categoryData._id,
            deckID: deckData._id,
            frontContent: flashcard.frontContent,
            backContent: flashcard.backContent,
            viewCount: 0,
          }),
        });
      });

      const cardResponses = await Promise.all(cardPromises);
      const cardData = await Promise.all(cardResponses.map((response) => response.json()));
      console.log(cardData);

      // Check if all requests were successful
      const allRequestsSuccessful = cardResponses.every((response) => response.ok);
      if (categoryResponse.ok && deckResponse.ok && allRequestsSuccessful) {
        // Data submitted successfully
        showToastMessageSuccess();
        // Reset form fields
        setFlashcards([{ frontContent: '', backContent: '' }]);
        setCategory('');
        setDeckTitle('');
        setDescription('');
      } else {
        // Error occurred while submitting data
        showToastMessageError();
      }
    } catch (error) {
      console.error('Error:', error);
      showToastMessageError();
    }
  };

  return (
    <div>
      <h2 className='add-flashcards'>Add Flashcard</h2>
      <form className='adding-flashcards'>
        <div>
          <label className='category-title-description'>Category:</label>
          <input
            type='text'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='input-add'
          />
        </div>
        <div>
          <label className='category-title-description'>Deck Title:</label>
          <input
            type='text'
            value={deckTitle}
            onChange={(e) => setDeckTitle(e.target.value)}
            className='input-add'
          />
        </div>
        <div>
          <label className='category-title-description'>Description:</label>
          <input
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='input-add'
          />
        </div>
        {flashcards.map((flashcard, index) => (
          <div key={index} className='add'>
            <label className='category-title-description'>Front:</label>
            <textarea
              type='text'
              value={flashcard.frontContent}
              onChange={(e) => handleFlashcardChange(index, 'frontContent', e.target.value)}
              className='input-add'
            />
            <label>Back:</label>
            <textarea
              type='text'
              value={flashcard.backContent}
              onChange={(e) => handleFlashcardChange(index, 'backContent', e.target.value)}
              className='input-add'
            />
          </div>
        ))}
        <div className='add'>
          <label className='category-title-description'>Visibility:</label>
          <select
            className='select visibility'
            value={visibility}
            onChange={handleVisibilityChange}
          >
            <option value='public'>Public</option>
            <option value='private'>Private</option>
          </select>
        </div>
        <div className='button-container'>
          <button
            type='button'
            className='sign-btn2'
            onClick={handleAddFlashcard}
          >
            <p className='started-button2'>Add Flashcard</p>
          </button>
          <button type='button' className='sign-btn2' onClick={handleSubmit}>
            <p className='started-button2'>Submit</p>
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default FlashcardForm;

