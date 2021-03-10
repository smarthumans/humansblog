import React from 'react';
import { TiSocialTwitterCircular, TiSocialFacebookCircular, TiSocialInstagramCircular, TiSocialPinterestCircular, TiSocialYoutubeCircular } from "react-icons/ti";
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import * as MainConstants from '../../constants/MainConstants';

const useStyles = makeStyles(() => ({
  socialLink: {
    '&:hover': {
      color: '#2ecc71'
    }
  },
  footer : {
    height: '100px',
    position: 'relative',
    backgroundColor: '#2e2e2e'
  },
  iconNav : {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  },
}));

const IconNav = styled.ul`
margin: 0 0 0 auto;
`;

const Footer = () => {

  const classes = useStyles();
  
  return (
    <ThemeProvider theme={MainConstants.theme}>
    <CssBaseline />
    <footer className={classes.footer}>
      <IconNav className={classes.iconNav}>
          <Link variant="button" color="primary" href="#" className={classes.socialLink}>
            <TiSocialTwitterCircular size='2.5em'/>
          </Link>
          <Link variant="button" color="primary" href="#" className={classes.socialLink}>
            <TiSocialFacebookCircular size='2.5em'/>
          </Link>
          <Link variant="button" color="primary" href="#" className={classes.socialLink}>
            <TiSocialInstagramCircular size='2.5em'/>
          </Link>
          <Link variant="button" color="primary" href="#" className={classes.socialLink}>
            <TiSocialPinterestCircular size='2.5em'/>
          </Link>
          <Link variant="button" color="primary" href="#" className={classes.socialLink}>
            <TiSocialYoutubeCircular size='2.5em'/>
          </Link>
        </IconNav>
    </footer>
    </ThemeProvider>
  )
}

export default Footer;