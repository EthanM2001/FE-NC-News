import React, { Component } from 'react';
import * as api from '../utils/api'

class CommentAdder extends Component {

state = {
    username: '',
    body: ''
}

handleChange = (event) => {
    this.setState({ body: event.target.value })
}

handleSubmitForm = (event) => {
    event.preventDefault();
    const { username, article_id } = this.props;
    const { body } = this.state
    api.postComment(username, article_id, body)
    .then(() => {
        this.setState({ username: '', body: ''})
    })
}

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <textarea
            onChange = {this.handleInput}
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