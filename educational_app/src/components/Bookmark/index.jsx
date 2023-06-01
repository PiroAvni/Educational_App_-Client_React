import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [decks, setDecks] = useState([]);
  const [selectedDeck, setSelectedDeck] = useState('');

  useEffect(() => {
    fetchBookmarks();
    fetchDecks();
  }, []);

  const fetchBookmarks = async () => {
    try {
      const response = await axios.get('/api/bookmarks');
      setBookmarks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDecks = async () => {
    try {
      const response = await axios.get('/api/decks');
      setDecks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeckClick = (deckId) => {
    setSelectedDeck(deckId);
  };

  const handleBookmark = async () => {
    try {
      const response = await axios.post('/api/bookmarks', {
        deckId: selectedDeck,
      });
      console.log(response.data); // Handle the response as needed
      fetchBookmarks();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Bookmarks</h1>
      <ul>
        {bookmarks.map((bookmark) => (
          <li key={bookmark._id}>{bookmark.deckId}</li>
        ))}
      </ul>
      <h1>Decks</h1>
      <ul>
        {decks.map((deck) => (
          <li key={deck._id} onClick={() => handleDeckClick(deck._id)}>
            {deck.title}
          </li>
        ))}
      </ul>
      <button onClick={handleBookmark} disabled={!selectedDeck}>
        Add Bookmark
      </button>
    </div>
  );
};

export default Bookmarks;