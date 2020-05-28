import React, { Component } from 'react';
import Loading from './Loading';
import CommentCard from './CommentCard';
import * as api from '../utils/api'

class CommentList extends Component {


state = {
    comments: [],
    isLoading: true,
}

componentDidMount() {
    this.fetchComments()
}

fetchComments = () => {
    const article_id = this.props.article_id
    api.getComments(article_id)
    .then((comments) => {
        this.setState({ comments, isLoading: false})
    })
}


    render() {
        if (this.state.isLoading) return <Loading />
        return (
            <main>
                <ul>
                    {this.state.comments.map((comment) => {
                        return <CommentCard key={comment.comment_id} {...comment} />
                    })}
                </ul>
            </main>
        );
    }
}

export default CommentList;