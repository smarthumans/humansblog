import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import { TiSocialTwitterCircular, TiSocialFacebookCircular, TiSocialInstagramCircular, TiSocialPinterestCircular, TiSocialYoutubeCircular } from "react-icons/ti";
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import * as MainConstants from '../../constants/MainConstants';

const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(1, 1.5),
    fontWeight : "bold",
    '&:hover': {
      color: '#2ecc71'
    }
  },
  socialLink: {
    '&:hover': {
      color: '#2ecc71'
    }
  }
}));

const Nav = styled.nav`
align: right;
`;

const IconNav = styled.ul`
margin: 0 0 0 auto;
`;


const Header = () => {

  const classes = useStyles();

  const [appBar, setAppBar] = useState(false);

  const changebackground = () => {
    if(window.scrollY >= 30) {
      setAppBar(true);
    } else {
      setAppBar(false);
    }
  }
  
  window.addEventListener('scroll', changebackground)

  return (
    <ThemeProvider theme={MainConstants.theme}>
      <CssBaseline />
      <AppBar position="fixed" color={appBar ? 'primary' : 'transparent' } elevation={appBar ? '{0}' : '{1}'}>
      <Toolbar>
        <Nav>
          <Link variant="button" underline='none' color={appBar ? "secondary" : "primary"} href="#" className={classes.link}>
            Home
          </Link>
          <Link variant="button" underline='none' color={appBar ? "secondary" : "primary"} href="#" className={classes.link}>
            About
          </Link>
          <Link variant="button" underline='none' color={appBar ? "secondary" : "primary"} href="#" className={classes.link}>
            Contact
          </Link>
        </Nav>
        <IconNav>
          <Link variant="button" color={appBar ? "secondary" : "primary"} href="#" className={classes.socialLink}>
            <TiSocialTwitterCircular size='2.5em'/>
          </Link>
          <Link variant="button" color={appBar ? "secondary" : "primary"} href="#" className={classes.socialLink}>
            <TiSocialFacebookCircular size='2.5em'/>
          </Link>
          <Link variant="button" color={appBar ? "secondary" : "primary"} href="#" className={classes.socialLink}>
            <TiSocialInstagramCircular size='2.5em'/>
          </Link>
          <Link variant="button" color={appBar ? "secondary" : "primary"} href="#" className={classes.socialLink}>
            <TiSocialPinterestCircular size='2.5em'/>
          </Link>
          <Link variant="button" color={appBar ? "secondary" : "primary"} href="#" className={classes.socialLink}>
            <TiSocialYoutubeCircular size='2.5em'/>
          </Link>
        </IconNav>
      </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header;