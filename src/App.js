import React from "react";
import { useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./datas/data.js";
import Flat from "./pages/Flat.js";
import Today from "./pages/Today.js";
import Heel from "./pages/Heel.js";
import Sandle from "./pages/Sandle.js";
import Slliper from "./pages/Slliper.js";
import Detail from "./pages/Detail.js"



function App() {
  const [shoesList, setShoesList] = useState(data);
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={()=>{navigate("/")}}><span className="logo">Shopping Mall</span></Navbar.Brand>
          <Nav className="me-auto globalNav">
            <Nav.Link onClick={()=>{navigate("./today")}}><span className="gnb_menu"> 당일발송</span></Nav.Link>
            <Nav.Link onClick={()=>{navigate("./flat")}}><span className="gnb_menu">로퍼/플랫</span></Nav.Link>
            <Nav.Link onClick={()=>{navigate("./heel")}}><span className="gnb_menu">힐</span></Nav.Link>
            <Nav.Link onClick={()=>{navigate("./sandle")}}><span className="gnb_menu">샌들</span></Nav.Link>
            <Nav.Link onClick={()=>{navigate("./slipper")}}><span className="gnb_menu">슬리퍼</span></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="headImg">
        <img src={`${process.env.PUBLIC_URL}/img/test1.jpg`} alt="headImg" />
      </div>

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
        <Route path="/today" element={<Today/>}></Route>
        <Route path="/flat" element={<Flat/>}></Route>
        <Route path="/heel" element={<Heel/>}></Route>
        <Route path="/sandle" element={<Sandle/>}></Route>
        <Route path="/slipper" element={<Slliper/>}></Route>
      </Routes>

    </>
  );
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

export default App;
