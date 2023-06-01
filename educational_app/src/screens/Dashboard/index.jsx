import { useState, useEffect } from "react";
import { CategoryCard } from "../../components";
import { useSelector, useDispatch } from "react-redux";
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
          "https://educational-server-qq6d.onrender.com/api/cards"
        );
         console.log('line20:',response.data);
        setDecks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDecks();
  }, []);

  // const handleDeckClick = (categoryId) => {
  //   navigate(`/deck/${categoryId}`);
  // };

const uniqueCategories = [...new Set(decks.map((item) => item.categoryID._id))]
// console.log('uq', item)
  return (
    <>
      <div className="dashboard-container">
        <div className="avatar">
          <img className="avatar-img" src={avatar} alt="Profile image" />
        </div>
        <h1 className="dashboard-title" id="name">
        
          Welcome {userInfo.name}
        </h1>
        <p className="dashboard-description">Search for Category</p>

        <SearchForm />
        <div className="dashboard-categories-container">
           {uniqueCategories.map((categoryId, idx) => {
         
            const categoryDeck = decks.find((item)=> item.categoryID._id === categoryId
            )
            if(categoryDeck){
              return<CategoryCard key={idx} name={categoryId} decks={decks} />
            }
          })} 
        </div>
      </div>
    </>
  );
}

export default DashBoard;
