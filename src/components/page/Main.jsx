import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../../static/images/background1.jpg';
import * as MainConstants from '../../constants/MainConstants';
import Link from '@material-ui/core/Link';
import Card from '../parts/Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import Swiper from 'react-id-swiper';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Autoplay, Swiper as RealSwiper } from "swiper";
RealSwiper.use([Autoplay]);

const Div = styled.div`
position: relative;
font-size: 30px;
`;

const Image = styled.img`
height: 750px;
width: 100%;
object-fit: cover;
object-position : 50% 50%;
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

const CardDiv = styled.div`
position: relative;
align-items: center;
&:hover {
  opacity: 0.7;
}
margin:15px 0 0 0;
`;

const params = {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  }
}

const Main = () => {

  return (
    <ThemeProvider theme={MainConstants.theme}>
    <CssBaseline />
      <Div>
        <Image src={backgroundImage}/>
        <Title>WELCOME TO {MainConstants.TITLE}</Title>
      </Div>
      <Swiper {...params}>
        {MainConstants.CARD_LISTS.map((data) => {  
          return (
            <CardDiv>
              <Link href="#">
                <Card img={data.img} name={data.name}/>
              </Link>
            </CardDiv>
          )})
        }
      </Swiper>
    </ThemeProvider>
  )
}

export default Main;