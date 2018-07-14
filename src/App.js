import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header';
import Main from './containers/Main';
import Footer from './containers/Footer';
import { Provider, Subscribe, Container } from 'unstated';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
