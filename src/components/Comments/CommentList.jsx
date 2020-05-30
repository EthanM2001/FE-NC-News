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
      .catch((err) => {console.dir(err)});
  };

  render() {
    const { username, article_id } = this.props;
    const { comments } = this.state
    if (this.state.isLoading) return <Loading />;
    return (
        <>
      <main>
          <ul>
          <CommentAdder
            username={username}
            article_id={article_id}
            addCommentToArticle={this.addCommentToArticle}
          />
          {comments.map((comment) => {
            return <li key={comment.comment_id}>
            <CommentCard
                {...comment}
                user={this.props.user}
              />
              </li>
          })}
          </ul>
      </main>
      </>
    );
  }
}

export default CommentList;
