import React, { Component } from 'react';
import { Route, Switch, NavLink, HashRouter } from 'react-router-dom';

import Gallery from './Gallery';
import Photo from './Photo';
import './GalleryContainer.css';

class GalleryContainer extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/gallery' component={Gallery}/>
        <Route path='/gallery/:number' component={Photo}/>
      </Switch>
    );
  }
}

export default GalleryContainer;
