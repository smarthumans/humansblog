import React from 'react';
import styled from 'styled-components';

const CardImg = styled.img`
width: 380px;
height: 380px;
border-radius: 10px 10px 10px 10px;
box-shadow: 0 5px 10px 0 rgb(0 0 0 / 50%);
`;

const CardDitail = styled.div`
position: absolute;
top: 50%;
left: 50%;
-webkit-transform: translateX(-50%);
transform: translateX(-50%);
color: #F5F5F5;
font-weight: bold;
`;

const Card = (props) => {

  return (
    <>
        <CardImg alt="card" src={props.img}/>
        <CardDitail>{props.name}</CardDitail>
    </>
  
  )
}

export default Card;