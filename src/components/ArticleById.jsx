import React, { Component } from 'react';
import Loading from './Loading';
import * as api from '../utils/api';

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
        const { title, author, body, topic, votes, comment_count, created_at } = this.state.articleById
        if (this.state.isLoading) return <Loading />
        return (
            <article>
                <h1>{title}<br></br>{topic}</h1>
                <p>This article was written by {author} on {new Date(created_at).toLocaleDateString()} and has {comment_count} comments.</p>
                <p>{body}<br></br>{votes}</p>
                
            </article>
        );
    }
}

export default ArticleById;