import React, { useState } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { Container, Card } from 'react-bootstrap'
import './style.css'

const CategoryCard = ({ name }) => {
  // console.log('cat card:', name)
console.log(name)
//  const ids = name.filter((item)=> item._id === name)

  let navigate = useNavigate()
  const handleDeckClick = () => {
    const categoryId = name
    navigate(`/deck/${categoryId}`)
  }

  return (
    <div className=' py-5 Deck'>
      <Container className='d-flex justify-content-center deck-container'>
        <Card
          className='p-5 d-flex flex-column align-items-center deck-card  '
          onClick={handleDeckClick}
        >
          <div></div>

          <h2>{name}</h2>
        </Card>
      </Container>
    </div>
  )
}

export default CategoryCard
