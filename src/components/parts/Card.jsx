import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
position: relative;
align-items: center;
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
`;

const Card = (props) => {

  return (
    <div>
      <CardDiv>
        <CardImg alt="card" src={props.img}/>
        <CardDitail>{props.name}</CardDitail>
      </CardDiv>
    </div>
    
  )
}

export default Card;