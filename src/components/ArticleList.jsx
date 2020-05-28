import React, { Component } from 'react';
import ArticleCard from './ArticleCard'
import * as api from '../utils/api';
import Loading from './Loading';


class ArticleList extends Component {

state = {
    articles: [],
    isLoading: true,
}
    
fetchArticles = () => {
    api.getArticles(this.props.topic)
    .then((articles) => {
        this.setState({ articles, isLoading: false})
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
        if (this.state.isLoading) return <Loading />
        return (
            <>
            <main className="AllArticles">
                    {this.state.articles.map((article) => {
                    return <ArticleCard key={article.article_id} {...article} />
                    })}
            </main>
            </>
        );
    }
}

export default ArticleList;