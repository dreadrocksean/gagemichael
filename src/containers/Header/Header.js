import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import logo from '../../logo.svg';
import Nav from './Navigation';
import Hero from './Hero';
import HeroImage from '../../assets/images/hero_cropped.jpg';
import './Header.css';

const styles = {
  root: {
    flexGrow: 1,
  },
  // backgroundImage: `url(${HeroImage})`,
  title: {
    fontSize: '14.4vw',
    fontWeight: 800,
    fontFamily: 'sans-serif',
    position: 'absolute',
    width: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    margin: 0,
    color: 'rgba(255,255,255,0.1)',
    WebkitTextStrokeWidth: 0.5,
    WebkitTextStrokeColor: 'rgba(255,255,255,0.3)',
  },
};

class Header extends Component {
  render() {
    return (
      <AppBar position='static'>
        <header className='App-header'>
          <Hero />
          <div className='screen'></div>
          <Typography variant='title' color='inherit' style={styles.title}>
            Gage Michael
          </Typography>
          <Nav />
        </header>
      </AppBar>
    );
  }
}

export default Header;
