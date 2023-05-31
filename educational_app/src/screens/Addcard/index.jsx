import { useState } from 'react'
import { AddFormContainer, FormAddCard } from '../../components'
import './style.css'

const AddCard = () => {
  const [add, setAdd] = useState([])

  const addCard = (addCard) => {
    setAdd((prev) => [...prev, addCard])
  }

  const deleteCard = (deleteCard) => {
    const deleteFlashcard = add.filter((el) => el !== deleteCard)
    setAdd(deleteFlashcard)
  }

  let addFlashCard = 'No more cards? Add more'

  if (add.length > 0) {
    addFlashCard = <AddFormContainer add={add} deleteCard={deleteCard} />
  }

  return (
    <>
      <FormAddCard addCard={addCard} />
      {addFlashCard}
    </>
  )
}

export default AddCard
