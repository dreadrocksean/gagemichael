import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <NavLink to='mailto:breaxtownrecords@gmail.com'>breaxtownrecords@gmail.com</NavLink>
      </div>
    );
  }
}

export default Footer;
