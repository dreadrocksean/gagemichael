import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <nav className='navigation'>
      <IconButton color='inherit' aria-label='Menu'>
        <MenuIcon open={true} />
      </IconButton>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/music'>Music</NavLink></li>
          <li><NavLink to='/dates'>Shows</NavLink></li>
          <li><NavLink to='/gallery'>Gallery</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
