const AddCardContainer = ({ add, deleteCard }) => {
  return (
    <>
      {add.map((card, index) => (
        <div key={index}>
          <p>{card.content}</p>
          <p>{card.answer}</p>
          <button onClick={() => deleteCard(card)}>Delete</button>
        </div>
      ))}
    </>
  )
}

export default AddCardContainer
