import React, { Component } from 'react';

class CommentAdder extends Component {

state = {
    body: ''
}

handleChange = (event) => {
    this.setState({ body: event.target.value })
}

handleSubmit = (event) => {
    event.preventDefault();
    const { username, article_id, addCommentToArticle } = this.props;
    const { body } = this.state
    addCommentToArticle(article_id, username, body)
        this.setState({ body: '' })
}

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <textarea
                onChange = {this.handleChange}
                value={this.state.body}
                rows="10"
                columns="30"
                type="text"
                placeholder="Start typing..."
                required
            />
            <button>Submit!</button>
            </form>
        );
    }
}

export default CommentAdder;