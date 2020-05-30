import React, { Component } from "react";
import Loading from "../Resuable/Loading";
import CommentCard from "./CommentCard";
import * as api from "../../utils/api";
import CommentAdder from "./CommentAdder";

class CommentList extends Component {
  state = {
    comments: [],
    isLoading: true,
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
          console.log(comment)
          return comment_id !== comment.comment_id
        })
        return {comments: removeCommentFromState}
    })
    })
  }

  render() {
    const { username, article_id } = this.props;
    const { comments } = this.state
    if (this.state.isLoading) return <Loading />;
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
