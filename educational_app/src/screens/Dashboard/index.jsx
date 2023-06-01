import { useState, useEffect, useRef } from "react";

import { CategoryCard } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { TbMathSymbols } from "react-icons/tb";
import avatar from "../../../public/image/Profile-image.png";
import { SearchForm } from "../../components";
import { useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";

function DashBoard() {
  const [decks, setDecks] = useState([]);
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchDecks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/deck/"
        );
        console.log(response.data);
        setDecks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDecks();
  }, []);

  const handleDeckClick = (categoryId) => {
    navigate(`/decks/${categoryId}`);
  };


  return (
    <>
      <div className="dashboard-container">
        <div className="avatar">
          <img className="avatar-img" src={avatar} alt="Profile image" />
        </div>
        <h1 className="dashboard-title" id="name">
          {" "}
          Welcome {userInfo.name}{" "}
        </h1>
        <p className="dashboard-description">Search for Category</p>

        <SearchForm />
        <div className="dashboard-categories-container">
          {decks.map((item, idx) => (
            <CategoryCard key={idx} name={item.categoryId.name} categoryId={item.categoryId}  />
          ))}
        </div>
      </div>
    </>
  );
}

export default DashBoard;
