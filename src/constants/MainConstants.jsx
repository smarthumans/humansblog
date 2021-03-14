import aboutme from '../static/images/cards/card-about.jpg';
import gallery from '../static/images/gallery.jpg';
import exercise from '../static/images/cards/card-exercise.jpg';
import mental from '../static/images/cards/card-mental.jpg';
import meal from '../static/images/cards/card-meal.jpg';
import { createMuiTheme } from '@material-ui/core';

export const TITLE="WELCOME TO XXX";
export const TITLE1="自分が自分らしくいられるために";

export const CARD_LISTS = [
  {
    id: 1,
    link: "#/about",
    name: "ABOUT ME",
    img: aboutme,
  },
  {
    id: 2,
    link:"#",
    name: "GALLERY",
    img: gallery,
  },
  {
    id: 3,
    link: "#/exercise",
    name: "EXERCISE",
    img: exercise,
  },
  {
    id: 4,
    link:"#/mental",
    name: "MENTAL",
    img: mental,
  },
  {
    id: 5,
    link:"#/meal",
    name: "MEAL",
    img: meal,
  },
];

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F5F5F5',
    },
    secondary: {
      main: '#526071',
    },
  },
});