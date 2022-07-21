import React from "react";
import { useState } from "react";
import dataFlat from "../datas/data_flat.js";
import { Routes, Route, useNavigate } from "react-router-dom";
import Detail from "../pages/Detail.js"


function Flat() {

  const [shoesList, setShoesList] = useState(dataFlat);
  const navigate = useNavigate();

  return(
    <Routes>
    <Route
      path="/"
      element={
        <div className="productList">
          {shoesList.map((element, i) => {
            return (
              <div key={i} onClick={()=>{navigate('/detail/' + i)}}>
                <Item shoesList={shoesList[i]} i={i} />
              </div>
            )
          })}
        </div>
      }
    />
    <Route path="/detail/:id" element={<Detail shoesList={shoesList}/>} />
  </Routes>
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

export default Flat;