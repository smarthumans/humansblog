import aboutme from '../static/images/aboutme.jpg';
import gallery from '../static/images/gallery.jpg';
import category3 from '../static/images/background2.jpg';
import category4 from '../static/images/background2.jpg';
import { createMuiTheme } from '@material-ui/core';

export const TITLE="BLOG";

export const CARD_LISTS = [
  {
    id: 1,
    name: "ABOUT ME",
    img: aboutme,
  },
  {
    id: 2,
    name: "GALLERY",
    img: gallery,
  },
  {
    id: 3,
    name: "Leanne",
    img: category3,
  },
  {
    id: 4,
    name: "Leanne",
    img: category4,
  },
  {
    id: 5,
    name: "Leanne",
    img: category4,
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