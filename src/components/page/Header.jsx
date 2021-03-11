import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
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


const Header = () => {

  const classes = useStyles();

  const [appBar, setAppBar] = useState(false);

  const changebackground = () => {
    if(window.scrollY >= 50) {
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
          <Link variant="button" underline='none' color={appBar ? "secondary" : "primary"} href="/" className={classes.link}>
            Home
          </Link>
          <Link variant="button" underline='none' color={appBar ? "secondary" : "primary"} href="test" className={classes.link}>
            About
          </Link>
          <Link variant="button" underline='none' color={appBar ? "secondary" : "primary"} href="#" className={classes.link}>
            Contact
          </Link>
        </Nav>
      </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header;