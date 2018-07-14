import React, { Component } from 'react';
import logo from '../../logo.svg';
import Nav from './Navigation';
import Hero from './Hero';
import HeroImage from '../../assets/images/hero.jpg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className='App-header' style={styles}>
        <div className='screen'></div>
        <h1 className='App-title'>Gage Michael</h1>
        <Nav />
      </header>
    );
  }
}

const styles = {
  backgroundImage: `url(${HeroImage})`,
}

export default Header;
