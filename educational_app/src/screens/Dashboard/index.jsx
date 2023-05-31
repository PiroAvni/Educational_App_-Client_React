import React, { useState, useEffect, useRef } from "react";
import FlashcardList from "../../components/FlashCardList/index";
import { useSelector } from "react-redux";
import "./style.css";
import axios from "axios";

import Deck from "../../components/Deck/index";

function DashBoard() {
  const { userInfo } = useSelector((state) => state.auth);

  const [flashcards, setFlashcards] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  const categoryEl = useRef();
  const amountEl = useRef();
  const searchEl = useRef();

  const userName = "";

  useEffect(() => {
    axios.get("https://opentdb.com/api_category.php").then((res) => {
      setCategories(res.data.trivia_categories);
      setFilteredCategories(res.data.trivia_categories);
    });
  }, []);

  function decodeString(str) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .get("https://opentdb.com/api.php", {
        params: {
          amount: amountEl.current.value,
          category: categoryEl.current.value,
        },
      })
      .then((res) => {
        setFlashcards(
          res.data.results.map((questionItem, index) => {
            const answer = decodeString(questionItem.correct_answer);
            const options = [
              ...questionItem.incorrect_answers.map((a) => decodeString(a)),
              answer,
            ];
            return {
              id: `${index}-${Date.now()}`,
              question: decodeString(questionItem.question),
              answer: answer,
              options: options.sort(() => Math.random() - 0.5),
            };
          })
        );
      });
  }

  function handleSearch(e) {
    const searchTerm = searchEl.current.value.toLowerCase();
    const filteredCategories = categories.filter((category) =>
      category.name.toLowerCase().startsWith(searchTerm)
    );
    setFilteredCategories(filteredCategories);
  }

  function handleCategoryClick(categoryId) {
    categoryEl.current.value = categoryId;
    handleSubmit(new Event("submit"));
  }

  return (
    <>
      <div>
        <h1 className="" id="name">
          Welcome {userName}
        </h1>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search category..."
          onChange={handleSearch}
          ref={searchEl}
        />
      </div>

      <div className="container">
        <div className="category-cards">
          {filteredCategories.map((category) => (
            <Deck
              key={category.id}
              title={category.name}
              onClick={() => handleCategoryClick(category.id)}
            />
          ))}
        </div>

        {flashcards.length > 0 && (
          <>
            <Quiz flashcards={flashcards} />
          </>
        )}
      </div>
    </>
  );
}

export default DashBoard;
