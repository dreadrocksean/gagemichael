import React, { Component } from 'react';
// an API that returns a song object
// import SongAPI from './SongAPI';
import './Music.css';

const Song = props => {
  const songIndex = parseInt(props.match.params.number, 10);
  // const song = SongAPI.get(songIndex);
  if (!songIndex) {
    return <div>Sorry, but the song was not found</div>
  }
  return (
    <div className="song">
      <h2>Song (#{songIndex})</h2>
    </div>
  );
};

export default Song;
