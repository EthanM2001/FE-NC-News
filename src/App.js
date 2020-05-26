import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { Router } from '@reach/router';
import ArticleList from './components/ArticleList';

class App extends Component {

state = {
  user: 'Ethan'
}

  render() {
    return (
      <div>
        <Header user={this.state.user}/>
        <NavBar />
        <Router>
          <ArticleList path="/"/>
        </Router>
      </div>
    );
  }
}

export default App;
