import React from 'react';

import styled from 'styled-components';
import backgroundImage from '../../static/images/background1.jpg';
import * as MainConstants from '../../constants/MainConstants';
import Card from '../parts/Card';

const Image = styled.div`
background-image: url("${backgroundImage}");
background-repeat: no-repeat;
background-size: cover;
background-position: center;
height: 550px;
position: relative;
`;

const Title = styled.p`
text-align:center
font-weight: bold;
font-size: 3em;
position: absolute;
display: inline-block;
width: 50%;
top: 40%;
-webkit-transform: translateX(-50%);
transform: translateX(-50%);
color: #F5F5F5;
`;

const CardDisplay = styled.div`
margin-top: 20px;
display: flex;
flex-direction: column;
`;

const CardList = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
`;

const Main = () => {

  return (
    <> 
      <Image>
        <Title>WELCOME TO {MainConstants.TITLE}</Title>
      </Image>
      <CardDisplay>
        <CardList>
          {MainConstants.CARD_LISTS.map((data, index) => {
              console.log(data.img);
              if(index < 5 ) {
                return (
                  <Card img={data.img} name={data.name}/>
                )
              }
            })
          }
        </CardList> 

        <CardList>
          {MainConstants.CARD_LISTS.map((data, index) => {
              if(index >= 5 ) {
                return (
                  <Card img={data.img} name={data.name}/>
                )
              }
            })
          }
        </CardList>
      </CardDisplay>
    </>
  )
}

export default Main;