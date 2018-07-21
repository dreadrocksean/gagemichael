import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Paper, Grid } from '@material-ui/core';

import './Navigation.css';

const items = [
  {name:'Home', link:'/'},
  {name:'Music', link:'/music'},
  {name:'Shows', link:'/dates'},
  {name:'Contact', link:'/contact'},
  // {name:'Gallery', link:'/gallery'},
];
const columns = 12;

class Navigation extends Component {

  renderItem(item, i) {
    const count = items.length;
    const autoLayout = columns % count !== 0;
    const el = (autoLayout)
      ? (<Grid item xs key={i}>
          <NavLink to={item.link}>{item.name}</NavLink>
        </Grid>)
      : (<Grid item xs={columns} sm={columns / count} key={i}>
          <NavLink to={item.link}>{item.name}</NavLink>
        </Grid>);
    return el;
  }

  renderItems() {
    return (
      items.map((item, i) => this.renderItem(item, i))
    );
  }

  render() {
    return (
      <nav className='navigation'>
        <Grid container spacing={24}>
          {this.renderItems()}
        </Grid>
      </nav>


    );
  }
}

export default Navigation;
