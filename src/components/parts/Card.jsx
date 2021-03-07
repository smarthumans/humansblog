import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
position: relative;
align-items: center;
margin-right: 10px
margin-left: 10px;
&:hover {
  opacity: 0.7;
}

`;

const CardImg = styled.img`
width: 400px;
height: 400px;
color: #333;
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
    <a href="#"> 
      <CardDiv>
        <CardImg alt="card" src={props.img}/>
        <CardDitail>{props.name}</CardDitail>
      </CardDiv>
    </a>
  )
}

export default Card;