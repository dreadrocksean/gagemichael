import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Music.css';

class MusicCatalog extends Component {
  render() {
    return (
      <div className='music'>
        <h3>MusicCatalog</h3>
        <ul>
          <li>
            <Link to="https://soundcloud.com/gage_michael">
              Soundcloud
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/gage.g/">
              Instagram
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default MusicCatalog;
