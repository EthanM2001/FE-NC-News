import React, { Component } from "react";
import "./App.css";
import Header from "./components/Resuable/Header";
import NavBar from "./components/Resuable/NavBar";
import { Router } from "@reach/router";
import ArticleList from "./components/Article/ArticleList";
import ArticleById from "./components/Article/ArticleById";

class App extends Component {
  state = {
    username: "cooljmessy",
  };

  render() {
    const { username } = this.state;
    return (
      <div className="App">
        <Header username={username} />
        <NavBar />
        <Router>
          <ArticleList path="/" />
          <ArticleList path="/topics/:topic" />
          <ArticleById path="/articles/:article_id" username={username} />
        </Router>
      </div>
    );
  }
}

export default App;

// ErrorDisplayer at bottom of router
