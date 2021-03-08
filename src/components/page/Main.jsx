import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../../static/images/background1.jpg';
import * as MainConstants from '../../constants/MainConstants';
import Link from '@material-ui/core/Link';
import Card from '../parts/Card';
import Slider from "react-slick";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSetting = {
  dots: false,
  infinite: false,
  autoplay: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1 ,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const Div = styled.div`
position: relative;
`;

const Image = styled.img`
height: 550px;
width: 100%;
object-fit: cover;
`;

const Title = styled.p`
text-align:center
font-weight: bold;
font-size: 3em;
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
padding: 0 2.5px;
margin:15px 0 0 2.5px;
`;

const Main = () => {

  return (
    <ThemeProvider theme={MainConstants.theme}>
    <CssBaseline />
      <Div>
        <Image src={backgroundImage}/>
        <Title>WELCOME TO {MainConstants.TITLE}</Title>
      </Div>
      <Slider {...sliderSetting}>
        {MainConstants.CARD_LISTS.map((data) => {  
          return (
            <CardDiv>
              <Link href="#">
                <Card img={data.img} name={data.name}/>
              </Link>
            </CardDiv>
          )})
        }
      </Slider>
    </ThemeProvider>
  )
}

export default Main;