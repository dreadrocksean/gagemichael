import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import './Contact.css';

class Contact extends Component {
  render() {
    return (
        <Grid container spacing={8}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
              <Paper>
                <p>
                  Being entirely honest with oneself is a good exercise. Sigmund Freud.
                </p>
              </Paper>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={12}>
            <Grid container spacing={8}>
              <Grid item xs={10} sm={10} md={10} lg={10}>
                <Paper>
                  <p>
                    But a man is not made for defeat. A man can be destroyed but not defeated.
                  </p>
                </Paper>
              </Grid>
              <Grid item xs={2} sm={2} md={2} lg={2}>
                  <Button>close me</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    );
  }
}

export default Contact;
