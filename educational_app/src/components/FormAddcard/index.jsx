import { useState } from 'react'

const Form = ({ addCard }) => {
  const [addContent, setAddContent] = useState('')
  const [addAnswer, setAddAnswer] = useState('')

  const contentHandler = (event) => {
    setAddContent(event.target.value)
  }

  const answerHandler = (event) => {
    setAddAnswer(event.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const add = {
      content: addContent,
      answer: addAnswer,
    }
    addCard(add)

    setAddContent('')
    setAddAnswer('')
  }

  return (
    <form onSubmit={submitHandler}>
      <label role='label'>Content</label>
      <input type='text' onChange={contentHandler} value={addContent} />
      <label role='label'>Answer</label>
      <input type='text' onChange={answerHandler} value={addAnswer} />
      <button type='submit'>Add</button>
    </form>
  )
}

export default Form
