import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import slugify from 'slugify'
import './style.css'

const FlashcardForm = () => {
  const [flashcards, setFlashcards] = useState([
    { frontContent: '', backContent: '' },
  ])
  const [category, setCategory] = useState('')
  const [deckTitle, setDeckTitle] = useState('')
  const [description, setDescription] = useState('')
  const [visibility, setVisibility] = useState('public')
  const [notification, setNotification] = useState('')

  const { userInfo } = useSelector((state) => state.auth)

  console.log(userInfo._id)
  const handleFlashcardChange = (index, field, value) => {
    const updatedFlashcards = [...flashcards]
    updatedFlashcards[index][field] = value
    setFlashcards(updatedFlashcards)
  }

  const handleAddFlashcard = () => {
    setFlashcards([...flashcards, { frontContent: '', backContent: '' }])
  }

  const handleVisibilityChange = (e) => {
    setVisibility(e.target.value)
  }

  const handleSubmit = async () => {
    try {
      const slug = slugify(category, { lower: true })

   
      
      const categoryResponse = await fetch("http://localhost:5000/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: category, slug }),
      });
      const categoryData = await categoryResponse.json();
      console.log(categoryData);
  
      const deckResponse = await fetch("http://localhost:5000/api/deck", {
        method: "POST",

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
      })
      const deckData = await deckResponse.json()
      console.log(deckData)

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
        })
      })

      const cardResponses = await Promise.all(cardPromises)
      const cardData = await Promise.all(
        cardResponses.map((response) => response.json())
      )
      console.log(cardData)

      // Check if all requests were successful
      const allRequestsSuccessful = cardResponses.every(
        (response) => response.ok
      )
      if (categoryResponse.ok && deckResponse.ok && allRequestsSuccessful) {
        // Data submitted successfully
        setNotification('Flashcard successfully added!')
        // Reset form fields
        setFlashcards([{ frontContent: '', backContent: '' }])
        setCategory('')
        setDeckTitle('')
        setDescription('')
      } else {
        // Error occurred while submitting data
        setNotification('An error occurred while adding the flashcard.')
      }
    } catch (error) {
      console.error('Error:', error)
      setNotification('An error occurred while adding the flashcard.')
    }
  }

  return (
    <div className='Add-flashcard-container'>
      <h2 className='Add-Title'>Add Flashcard</h2>
      <form>
        <div>
          <label className='category-title-description'>Category:</label>
          <input
            type='text'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <label>Deck Title:</label>
          <input
            type='text'
            value={deckTitle}
            onChange={(e) => setDeckTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <h3>Flashcards:</h3>
        {flashcards.map((flashcard, index) => (
          <div key={index}>
            <label>Front:</label>
            <textarea className ="input-add:focus"
              type='text'
              value={flashcard.frontContent}
              onChange={(e) =>
                handleFlashcardChange(index, 'frontContent', e.target.value)
              }
            />
            <label>Back:</label>
            <textarea
              type='text'
              value={flashcard.backContent}
              onChange={(e) =>
                handleFlashcardChange(index, 'backContent', e.target.value)
              }
            />
          </div>
        ))}
        <div>
          <label>Visibility:</label>
          <select value={visibility} onChange={handleVisibilityChange}>
            <option value='public'>Public</option>
            <option value='private'>Private</option>
          </select>
        </div>
        <div className='button-container'>
        <button  className="sign-btn2"  type='button' onClick={handleAddFlashcard}>
          Add Flashcard
        </button>
        <button className="sign-btn2" type='button' onClick={handleSubmit}>
          Submit
        </button>
        </div>
      </form>
      {notification && <p>{notification}</p>}
    </div>
  )
}

export default FlashcardForm
