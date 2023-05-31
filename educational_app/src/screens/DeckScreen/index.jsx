import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Deck} from '../../components';

const DeckScreen = () => {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    // Fetch the deck data from the server
    const fetchDecks = async () => {
      try {
        const response = await axios.get('/api/decks'); // API endpoint
        setDecks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDecks();
  }, []);

  return (
    <div>
      <h1>Deck List</h1>
      {decks.map((deck) => (
        <Deck key={deck._id} deck={deck} />
      ))}
    </div>
  );
};

export default DeckScreen;