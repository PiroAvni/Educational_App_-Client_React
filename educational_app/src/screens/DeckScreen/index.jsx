import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Deck } from "../../components";

const DeckScreen = () => {
  const [decks, setDecks] = useState([]);


  const { categoryId } = useParams();
console.log(categoryId)
  console.log('decks,', decks)
  useEffect(() => {
    const fetchDecks = async () => {
      try {
        const response = await axios.get(
          `https://educational-server-qq6d.onrender.com/api/deck/`
        );
        console.log('deckscreen:',response.data)
        setDecks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDecks();
  }, [categoryId]);

  console.log("line 24 deck", decks);
  return (
    <div>
      <h1>Deck List</h1>
      {decks.map((deck) => (
        // console.log(deck.categoryId._id)
        <Link to={`${deck.categoryId._id}`} key={deck._id}>
          <Deck
            key={deck._id}
            deck={deck.title}
            name={deck.userId.name}
            category={deck.categoryId._id}
            description={deck.description}
            create_date={deck.create_date}
            visibility={deck.visibility}
          />
        </Link>
        
      ))}
    </div>
  );
};

export default DeckScreen;
