import React, { Component } from 'react';
import Loading from './Loading';
import * as api from '../utils/api';
import CommentList from './CommentList';

class ArticleById extends Component {

state = {
    articleById: {},
    isLoading: true
}

componentDidMount() {
    this.fetchArticleById()
}

fetchArticleById = () => {
    const { article_id } = this.props
    api.getArticleById(article_id)
    .then((articleById) => {
        this.setState({ articleById, isLoading: false })
    })
}



    render() {
        const { title, author, body, topic, comment_count, created_at } = this.state.articleById
        if (this.state.isLoading) return <Loading />
        return (
            <article>
                <h1 className="articleHeader">{title}<br></br>{topic}</h1>
                <p className="articleDescription">This article was written by {author} on {new Date(created_at).toLocaleDateString()} and has {comment_count} comments.</p>
                <p className="articleBody">{body}</p>
                <CommentList article_id={this.props.article_id} />
                
            </article>
        );
    }
}

export default ArticleById;