import React, { Component } from 'react';
import './Header.css';
import HeroImage from '../../assets/images/hero_cropped.jpg';

class Hero extends Component {
  render() {
    return (
      <div className='hero'>
        <img src={HeroImage} alt='hero' />
      </div>
    );
  }
}

export default Hero;
