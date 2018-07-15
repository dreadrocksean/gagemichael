import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <h3>My Genres:</h3>
        <p>Young Pop / Summer / Rap</p>
        <p>I’m looking to bring music back to being an art form.  I mix elements of rap, pop, jazz and rock with the finished jams made for people to listen, smile and have a good time with.</p>
        <h3>MISSION:</h3>
        <p>I deliver everyone a fun time by making the absolute best songs, guaranteeing smiles and enjoyment.</p> 
        <h3>Why should you press play? </h3>
        <p>Listen to my music if you like thoughtful lyrics with quality instrumentation. These songs are best listened to during warm days and fun nights. Bring your own cabana. Pina colada is optional.</p> 
        <h3>Live Performances</h3> 
        <p>I bring the best youthful live performance. I like to perform in intimate spaces with a few backing members to ensure that every audience member has something they like in the set. I mix hit covers with my own songs to curate a playlist that everyone appreciates.</p>
      </div>
    );
  }
}

export default Home;
