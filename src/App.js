import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';

class App extends Component {

state = {
  user: 'Ethan'
}

  render() {
    return (
      <div>
        <Header user={this.state.user}/>
        <NavBar />
      </div>
    );
  }
}

export default App;
