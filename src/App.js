import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { Router } from '@reach/router';
import ArticleList from './components/ArticleList';
import ArticleById from './components/ArticleById';
import CommentList from './components/CommentList';

class App extends Component {

state = {
  user: 'Ethan'
}

  render() {
    return (
      <div className="App">
        <Header user={this.state.user}/>
        <NavBar />
        <Router>
          <ArticleList path="/"/>
          <ArticleList path="/topics/:topic" />
          <ArticleById path="/articles/:article_id" />
          <CommentList path="/articles/:article_id/comments" />
        </Router>
      </div>
    );
  }
}

export default App;