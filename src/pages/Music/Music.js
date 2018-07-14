import React, { Component } from 'react';
import { Route, Switch, NavLink, HashRouter } from 'react-router-dom';

import MusicCatalog from './MusicCatalog';
import Song from './Song';
import './Music.css';

class Music extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/music' component={MusicCatalog}/>
        <Route path='/music/:number' component={Song}/>
      </Switch>
    );
  }
}

export default Music;
