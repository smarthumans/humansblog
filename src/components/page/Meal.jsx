import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../../static/images/meal.jpg';
import * as MainConstants from '../../constants/MainConstants';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Autoplay, Swiper as RealSwiper } from "swiper";
RealSwiper.use([Autoplay]);

const Div = styled.div`
position: relative;
font-size: 30px;
`;

const Image = styled.img`
height: 550px;
width: 100%;
object-fit: cover;
object-position : 50% 60%;
`;

const Title = styled.p`
text-align:center;
font-weight:700;
position: absolute;
top: 50%;
left: 50%;
-ms-transform: translate(-50%,-50%);
-webkit-transform: translate(-50%,-50%);
transform: translate(-50%,-50%);
color: #F5F5F5;
margin:auto;
`;

const Meal = () => {

  return (
    <ThemeProvider theme={MainConstants.theme}>
    <CssBaseline />
      <Div>
        <Image src={backgroundImage}/>
        <Title>MEAL</Title>
      </Div>
    </ThemeProvider>
  )
}

export default Meal;