import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Deck } from "../../components";

const DeckScreen = () => {
  const [decks, setDecks] = useState([]);
  const { categoryId } = useParams();

console.log(decks)
console.log(categoryId)
  useEffect(() => {
    const fetchDecks = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/deck/`);
        console.log(response.data)
        const filteredDecks = response.data.filter((d) => {
          return d.categoryId._id === categoryId;
      
        });

        setDecks(filteredDecks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDecks();
  }, [categoryId]);

  console.log("line 28 deck", decks);
  return (
    <div>
      <h1>Deck List</h1>
      {decks.map((deck) => (
        <Link to={`/deck/${deck._id}`} key={deck._id}>
          <Deck
          id={deck._id}
            deck={deck.title}
            name={deck.userId.name}
            category={deck.categoryId.name}
            description={deck.description}
            create_date={deck.create_date}
            // visibility={deck.visibility} // Assuming visibility is a property of the deck object
          />
        </Link>
      ))}
    </div>
  );
};

export default DeckScreen;
