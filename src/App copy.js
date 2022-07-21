import "./App.css";
import data from "./data.js";
import { Container, Nav, Navbar} from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [shoesList, setShoesList] = useState(data); 

  return (
    <>

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Shopping Mall</Navbar.Brand>
          <Nav className="me-auto globalNav">
            <Nav.Link href="#home">Sale</Nav.Link>
            <Nav.Link href="#features">자체제작</Nav.Link>
            <Nav.Link href="#pricing">당일발송</Nav.Link>
            <Nav.Link href="#pricing">로퍼/플랫</Nav.Link>
            <Nav.Link href="#pricing">힐</Nav.Link>
            <Nav.Link href="#pricing">샌들</Nav.Link>
            <Nav.Link href="#pricing">슬리퍼</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="headImg">
        <img src={`${process.env.PUBLIC_URL}/img/test1.jpg`} alt="headImg"/>
      </div>

      <div className="productList">
        {shoesList.map((element, i)=>{
            return(
              <Card shoesList={shoesList[i]} i={i} key={i}/>
            )
          })
        }
      </div>

    </>
  );
}

function Card(props){

  return(
    <div className="list">
      <img src ={`${process.env.PUBLIC_URL}/img/product0${props.i+1}.jpg`} alt="listImg"/>
      <p className="list-title">{props.shoesList.title}</p>
      <p className="list-content">{props.shoesList.content}</p>
      <p className="list-price">{props.shoesList.price}원</p>
    </div>
  )
}

export default App;
