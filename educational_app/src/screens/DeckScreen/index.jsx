import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Deck} from '../../components';

const DeckScreen = () => {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
  
    const fetchDecks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/deck/'); 
        console.log(response.data)
        setDecks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDecks();
  }, []);

  console.log(decks)
  return (
    <div>
      <h1>Deck List</h1>
      {/* {decks.map((deck) => (
        <Deck key={deck._id} deck={deck.title} />
      ))} */}
    </div>
  );
};

export default DeckScreen;