import React, { Component } from 'react';

class CommentAdder extends Component {

state = {
    body: '',
    commentDenied: true
}

handleChange = (event) => {
    this.setState({ body: event.target.value })
}

handleSubmit = (event) => {
    event.preventDefault();
    const { username, article_id, addCommentToArticle } = this.props;
    const { body } = this.state
    addCommentToArticle(article_id, username, body)
        this.setState({ body: '', commentDenied: false })
}

    render() {
        const { commentDenied } = this.state;
        if (!commentDenied) return <p>Your comment has been posted!</p>
        return (
            <>
            <p className="addComment">Add a comment...</p>
            <form onSubmit={this.handleSubmit}>
            <textarea className="input"
                onChange = {this.handleChange}
                value={this.state.body}
                rows="10"
                columns="30"
                type="text"
                placeholder="Add comment here..."
                required
            />
            <button>Submit!</button>
            </form>
            </>
        );
    }
}

export default CommentAdder;