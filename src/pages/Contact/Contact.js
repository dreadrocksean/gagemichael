import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <a href="mailto:breaxtownrecords@gmail.com">breaxtownrecords@gmail.com</a>
      </div>
    );
  }
}

export default Contact;
