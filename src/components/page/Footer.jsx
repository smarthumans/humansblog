import React from 'react';
import { TiSocialTwitterCircular, TiSocialFacebookCircular, TiSocialInstagramCircular, TiSocialPinterestCircular, TiSocialYoutubeCircular } from "react-icons/ti";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import * as MainConstants from '../../constants/MainConstants';


const useStyles = makeStyles((theme) => ({
  socialLink: {
    '&:hover': {
      color: '#2ecc71'
    }
  }
}));

const IconNav = styled.ul`
margin: 0 0 0 auto;
`;

const Footer = () => {

  const classes = useStyles();
  
  return (
    <ThemeProvider theme={MainConstants.theme}>
      <CssBaseline />
      <AppBar position="fixed" color='primary' elevation='{0}'>
      <Toolbar>
      <IconNav>
          <Link variant="button" color="secondary" href="#" className={classes.socialLink}>
            <TiSocialTwitterCircular size='2.5em'/>
          </Link>
          <Link variant="button" color="secondary" href="#" className={classes.socialLink}>
            <TiSocialFacebookCircular size='2.5em'/>
          </Link>
          <Link variant="button" color="secondary" href="#" className={classes.socialLink}>
            <TiSocialInstagramCircular size='2.5em'/>
          </Link>
          <Link variant="button" color="secondary" href="#" className={classes.socialLink}>
            <TiSocialPinterestCircular size='2.5em'/>
          </Link>
          <Link variant="button" color="secondary" href="#" className={classes.socialLink}>
            <TiSocialYoutubeCircular size='2.5em'/>
          </Link>
        </IconNav>
      </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default Footer;