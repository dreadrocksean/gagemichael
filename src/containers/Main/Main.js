import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../../pages/Home';
import Music from '../../pages/Music';
import Dates from '../../pages/Dates';
import Gallery from '../../pages/Gallery';
import Contact from '../../pages/Contact';

import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className='main'>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/music' component={Music}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/gallery' component={Gallery}/>
          <Route path='/dates' component={Dates}/>
          <Redirect to='/' />
        </Switch>
      </div>
    );
  }
}

export default Main;
