import React, { Component } from "react";
import Loading from "../Resuable/Loading";
import CommentCard from "./CommentCard";
import * as api from "../../utils/api";
import CommentAdder from "./CommentAdder";
import ErrorDisplayer from "../Resuable/ErrorDisplayer";

class CommentList extends Component {
  state = {
    comments: [],
    isLoading: true,
    err: ''
  };

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    const article_id = this.props.article_id;
    api.getComments(article_id).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  };

  addCommentToArticle = (article_id, username, body) => {
    api
      .postComment(article_id, username, body)
      .then(({ data }) => {
        const newComment = data.comment;
        this.setState({
          comments: [newComment, ...this.state.comments],
          isLoading: false,
        });
      })
  };

  deleteComment = (comment_id) => {
    api.deleteCommentById(comment_id).then(() => {
      this.setState((currentState) => {
        const removeCommentFromState = currentState.comments.filter((comment) => {
          return comment_id !== comment.comment_id
        })
        return {comments: removeCommentFromState}
    })
    })
    .catch(err => {
      this.setState({ err: err.response.data.msg, isLoading: false})
    })
  }

  render() {
    const { username, article_id } = this.props;
    const { comments, err, isLoading } = this.state
    if (isLoading) return <Loading />;
    if (err) return <ErrorDisplayer /> 
    return (
        <>
      <main>
          <CommentAdder
            username={username}
            article_id={article_id}
            addCommentToArticle={this.addCommentToArticle}
            />
          {comments.map((comment) => {
            return (
              <CommentCard
              key={comment.comment_id}
              {...comment}
              username={this.props.username}
              deleteComment={this.deleteComment}
              />
              )
            })}
      </main>
      </>
    );
  }
}

export default CommentList;
