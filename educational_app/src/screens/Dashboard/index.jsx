
import { useState, useEffect, useRef } from "react";

import Deck from'../../components/Deck/index';
import { useSelector, useDispatch } from 'react-redux';
import { TbMathSymbols } from 'react-icons/tb';
import avatar from '../../../public/image/Profile-image.png'
import { SearchForm } from "../../components";
import { useNavigate } from 'react-router-dom';
import "./style.css";
import axios from "axios";

function DashBoard() {
  const { userInfo } = useSelector((state) => state.auth)

  const category=  [
    {id: 1,title: "Maths", img :<TbMathSymbols/>},{id: 2,title: "Science", img :<TbMathSymbols/>}
] 


 
  return (
    <>

<div className="dashboard-container">
  <div className="avatar">
   <img className="avatar-img" src={avatar} alt="Profile image"/>
  </div>
  <h1 className="dashboard-title" id='name'> Welcome {userInfo.name} </h1>
<p className="dashboard-description">Search for Category</p>

<SearchForm/>
<div className="dashboard-decks-container">
{category.map((item, idx) =>(
  <Deck  key ={idx} title={item.title} img= {item.img}/>
  
))}
</div>
</div>



    </>
  )
}


export default DashBoard;



