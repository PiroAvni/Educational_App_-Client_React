import { useState, useEffect, useRef } from 'react'
import FlashcardList from '../../components/FlashCardList/index'
import Deck from '../../components/Deck/index'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './style.css'
import axios from 'axios'

function DashBoard() {
  const { userInfo } = useSelector((state) => state.auth)

  const [flashcards, setFlashcards] = useState([])
  const [categories, setCategories] = useState([])

  const categoryEl = useRef()
  const amountEl = useRef()

  const userName = 'Avni'

  useEffect(() => {
    axios.get('https://opentdb.com/api_category.php').then((res) => {
      setCategories(res.data.trivia_categories)
    })
  }, [])

  useEffect(() => {}, [])

  function decodeString(str) {
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str
    return textArea.value
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios
      .get('https://opentdb.com/api.php', {
        params: {
          amount: amountEl.current.value,
          category: categoryEl.current.value,
        },
      })
      .then((res) => {
        setFlashcards(
          res.data.results.map((questionItem, index) => {
            const answer = decodeString(questionItem.correct_answer)
            const options = [
              ...questionItem.incorrect_answers.map((a) => decodeString(a)),
              answer,
            ]
            return {
              id: `${index}-${Date.now()}`,
              question: decodeString(questionItem.question),
              answer: answer,
              options: options.sort(() => Math.random() - 0.5),
            }
          })
        )
      })
  }

  return (
    <>
      <div>
        <h1 className='' id='name'>
          {' '}
          Welcome {userName}{' '}
        </h1>
      </div>

      <form className='header' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='category'>Category</label>
          <select id='category' ref={categoryEl}>
            {categories.map((category) => {
              return (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              )
            })}
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>Number of Questions</label>
          <input
            type='number'
            id='amount'
            min='1'
            step='1'
            defaultValue={10}
            ref={amountEl}
          />
        </div>
        <div className='form-group'>
          <button className='btn'>Generate</button>
        </div>
      </form>
      <div className='container'>
        <FlashcardList flashcards={flashcards} />
        <Deck />
      </div>
    </>
  )
}

export default DashBoard
