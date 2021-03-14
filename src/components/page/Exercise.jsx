import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../../static/images/exercise.jpg';
import * as ExerciseConstants from '../../constants/ExerciseConstants';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Autoplay, Swiper as RealSwiper } from "swiper";
RealSwiper.use([Autoplay]);

const ExerciseDiv = styled.div`
display: flex;
flex-direction: column;
`;

const Div = styled.div`
position: relative;
font-size: 30px;
`;

const Image = styled.img`
height: 550px;
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

const OddField = styled.div`
display: flex;
flex-direction: column;
background-color: white;
color: black;
`;

const OddTitle = styled.div`
text-align:center;
font-weight:bolder;
margin:auto;
padding-top: 50px;
font-size: 2em;
`;

const OddContent = styled.p`
text-align:left;
font-weight:700;
margin:auto;
white-space:pre-wrap;
`;

const EvenField = styled.div`
display: flex;
flex-direction: column;
color: #F5F5F5;
background-color: #172b4d;
`;

const EvenTitle = styled.div`
text-align:center;
font-weight:bolder;
padding-top: 50px;
margin:auto;
font-size: 2em;
`;

const EvenContent = styled.p`
text-align:left;
font-weight:500;
margin:auto;
white-space:pre-wrap;
`;

const Exercise = () => {

  return (
    <ThemeProvider theme={ExerciseConstants.theme}>
    <CssBaseline />
      <ExerciseDiv>
        <Div>
          <Image src={backgroundImage}/>
          <Title>{ExerciseConstants.TITLE}</Title>
        </Div>
        
        {ExerciseConstants.CONTENT_LISTS.map((data) => {  
          if (data.id % 2 === 0){
            return (
              <EvenField>
                <EvenTitle>{data.title}</EvenTitle>
                <EvenContent>{data.content}</EvenContent>
              </EvenField>
            )
          } else {
            return (
              <OddField>
                <OddTitle>{data.title}</OddTitle>
                <OddContent>{data.content}</OddContent>
              </OddField>
            )
          }
        })}
      </ExerciseDiv>
    </ThemeProvider>
    
  )
}

export default Exercise;