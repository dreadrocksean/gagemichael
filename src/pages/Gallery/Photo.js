import React, { Component } from 'react';
// an API that returns a photo object
// import PhotoAPI from './PhotoAPI';
import './GalleryContainer.css';

const Photo = props => {
  const photoIndex = parseInt(props.match.params.number, 10);
  // const photo = PhotoAPI.get(photoIndex);
  if (!photoIndex) {
    return <div>Sorry, but the photo was not found</div>
  }
  return (
    <div>
      <h2>Photo (#{photoIndex})</h2>
    </div>
  );
};

export default Photo;
