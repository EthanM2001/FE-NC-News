import React, { Component } from 'react';
import ArticleCard from './ArticleCard'
import * as api from '../../utils/api';
import Loading from '../Resuable/Loading';
import ErrorDisplayer from '../Resuable/ErrorDisplayer';



class ArticleList extends Component {

state = {
    articles: [],
    isLoading: true,
    err: ''
}
    
fetchArticles = () => {
    const { topic } = this.props;
    api.getArticles(topic)
    .then((articles) => {
        this.setState({ articles, isLoading: false })
    })
    .catch(err => {
        this.setState({ err: err.response.data.msg, isLoading: false})
    })
}

componentDidMount() {
    this.fetchArticles();
}

componentDidUpdate(prevProps) {
    const topicHasChanged = prevProps.topic !== this.props.topic
    if (topicHasChanged)
    this.fetchArticles()
}

    render() {
        const { isLoading, err } = this.state
        if (isLoading) return <Loading />
        if (err) return <ErrorDisplayer />
        const { articles } = this.state
        return (
            <>
            <main className="AllArticles">
                <ul>
                    {articles.map((article) => {
                        console.log(articles)
                    return <ArticleCard key={article.article_id} {...article} />
                    })}
                </ul>
            </main>
            </>
        );
    }
}

export default ArticleList;