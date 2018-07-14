import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import './Header.css';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul className='navigation'>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/music'>Music</NavLink></li>
          <li><NavLink to='/dates'>Show Dates</NavLink></li>
          <li><NavLink to='/gallery'>Gallery</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
