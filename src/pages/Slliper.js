import React from "react";
import { useState } from "react";
import dataSlliper from "../datas/data_slliper.js";
import { useNavigate } from "react-router-dom";

function Slliper() {

  const [shoesList, setShoesList] = useState(dataSlliper);
  const navigate = useNavigate();

  return(
    <div className="productList">
    {shoesList.map((element, i) => {
      return (
        <div key={i} onClick={()=>{navigate('/detail/' + i)}}>
          <Item shoesList={shoesList[i]} i={i} />
        </div>
      )
    })}
   </div>
  )
}

function Item(props) {
  return (
    <div className="list">
      <img
        src={`${process.env.PUBLIC_URL}/img/product0${props.i + 1}.jpg`}
        alt="listImg"
      />
      <p className="list-title">{props.shoesList.title}</p>
      <p className="list-content">{props.shoesList.content}</p>
      <p className="list-price">{props.shoesList.price}</p>
    </div>
  );
}

export default Slliper;