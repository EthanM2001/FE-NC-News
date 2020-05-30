import React, { Component } from "react";
import Loading from "../Resuable/Loading";
import * as api from "../../utils/api";
import CommentList from "../Comments/CommentList";
import ErrorDisplayer from "../Resuable/ErrorDisplayer";

class ArticleById extends Component {
  state = {
    articleById: {},
    isLoading: true,
    err: ''
  };

  componentDidMount() {
    this.fetchArticleById();
  }

  fetchArticleById = () => {
    const { article_id } = this.props;
    api.getArticleById(article_id)
    .then((articleById) => {
      this.setState({ articleById, isLoading: false });
    })
    .catch(err => {
      this.setState({ err: err.response.data.msg, isLoading: false})
    })
  };

  render() {
    const { username, article_id } = this.props;
    const {
      title,
      author,
      body,
      topic,
      comment_count,
      created_at,
    } = this.state.articleById;
    const {isLoading, err} = this.state
    if (isLoading) return <Loading />;
    if (err) return <ErrorDisplayer />
    return (
      <article>
        <h1 className="articleHeader">
          {title}
          <br></br>
          {topic}
        </h1>
        <p className="articleDescription">
          This article was written by {author} on{" "}
          {new Date(created_at).toLocaleDateString()} and has {comment_count}{" "}
          comments.
        </p>
        <p className="articleBody">{body}</p>
        <CommentList article_id={article_id} username={username} />
      </article>
    );
  }
}

export default ArticleById;
