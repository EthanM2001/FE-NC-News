import React, { Component } from 'react';
import ArticleCard from './ArticleCard'
import * as api from '../utils/api';
import Loading from './Loading';


class ArticleList extends Component {

state = {
    articles: [],
    isLoading: true
}

    
fetchArticles = () => {
    api.getArticles()
    .then((articles) => {
        this.setState({ articles, isLoading: false})
    })
}

componentDidMount() {
    this.fetchArticles();
}


    render() {
        if (this.state.isLoading) return <Loading />
        return (
            <main className="AllArticles">
                    {this.state.articles.map((article) => {
                    return <ArticleCard key={article.article_id} {...article} />
                    })}
            </main>
        );
    }
}

export default ArticleList;

// Want to click on title and takes you to that article with the articles id in the url... e.g. /articles/2

// Make title a Link Component inside ArticleCard. 
// to property of /articles/:article_id
// put articles_id into url

// When clicking on a topic, articles should be filtered with that topic... 