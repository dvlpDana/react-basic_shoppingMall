import { useEffect, useState  } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import React from "react";
import { useParams} from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import style from './Detail.module.css'
import styled from 'styled-components';

function Detail(props) {

  let {id} = useParams();
  id = Number(id);
  let findId = props.shoesList.find(function(x) {
    return x.id === id;
  });

  let[count, setCount] = useState(0);
  // let[alert, setAlert] = useState(true);

  // let Box = styled.div`
  // &:hover {
  //   background-color : skyblue;
  // }
  // padding : 20px;
  // color : gray;
  // border: 1px solid #333`

  // let Button = styled.div`
  // display : inline-block;
  // padding : 20px;
  // background-color : yellow;
  // border-radius : 16px;
  // background-color : ${props => props.bg};`

  // useEffect(()=>{
  //   let timer = setTimeout(()=>{setAlert(false)}, 5000);
  //   console.log('test');
  //   return()=>{
  //     console.log('test2')
  //     clearTimeout(timer)
  //   }
  // });

  return (
    <section className={style.secDetail}>

      {/* <Box>
        테스트
        <Button bg = "green">버튼1</Button>
        <Button bg = "yellow">버튼2</Button>
      </Box>

      {alert === true ? (
        <Alert variant="warning">
        5초 이내로 클릭하지 않으면 자동 구매됩니다.
        </Alert>
      ) : null} */}

      <div className={style.detailPage}>
        <ul className={style.productList}>
          <li>베스트</li>
          <li>부츠</li>
          <li>숏부츠</li>
          <li>장화</li>
        </ul>
        <div className={style.detailProduct}>
          <div className={style.detailProductImg}><img src={`${process.env.PUBLIC_URL}/img/product0${id + 1}.jpg`} alt="listImg" /></div>
          <div className={style.detailProductTxt}>
            <h4>{props.shoesList[id].title}</h4>
            <p><span className={style.productPrice}>판매가격</span> <strong>{props.shoesList[id].price}</strong></p>
            <p>
              <span>수량</span>
              <p>
                <span>{count}</span>
                <button onClick={()=>{setCount(count + 1)}}></button>
              </p>
            </p>
            <p className={style.totalPrice}>
              <span>총 금액</span>
              <span>{props.shoesList[id].price * count}</span>
            </p>
            <button className={style.detailBtn}>바로구매</button>
            <button className={style.detailBtn}>장바구니</button>
          </div>
        </div>
      </div>

      <p className={style.GoTop} onClick={()=>{}}>
        <span></span>
        <span></span>
      </p>
    </section>
  );
}

export default Detail;
