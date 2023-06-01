import { useState, useEffect, useRef } from 'react'
import './style.css'

const SearchForm = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const inputRef = useRef()

  const handleInputChange = (e) => {
    const heroSearch = e.target.value
    setSearchTerm(heroSearch)
    console.log(heroSearch)
  }

  function handleSubmit(e) {
    e.preventDefault()
    handleSearch(searchTerm)
    setSearchTerm('')
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <form
      className='add-flashcards-container'
      role='search'
      onSubmit={handleSubmit}
    >
      <input
        id='superhero'
        type='text'
        placeholder='Search...'
        value={searchTerm}
        autoComplete='off'
        ref={inputRef}
        onChange={handleInputChange}
        required
      />
      <input className='button' type='submit' value='Search' />
    </form>
  )
}

export default SearchForm
