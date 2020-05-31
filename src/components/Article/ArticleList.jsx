import React, { Component } from 'react';
import ArticleCard from './ArticleCard'
import * as api from '../../utils/api';
import Loading from '../Resuable/Loading';
import ErrorDisplayer from '../Resuable/ErrorDisplayer';
import Sort from '../Resuable/Sort';



class ArticleList extends Component {

state = {
    articles: [],
    isLoading: true,
    order: "desc",
    sort_by: null,
    err: ''
}
    
fetchArticles = () => {
    const { topic } = this.props;
    const { order, sort_by } = this.state;
    api.getArticles(topic, order, sort_by)
    .then((articles) => {
        this.setState({ articles, isLoading: false })
    })
    .catch(err => {
        this.setState({ err: err.response.data.msg, isLoading: false})
    })
}

handleSort = (event) => {
    this.setState({ sort_by: event.target.value })
}

handleOrder = (event) => {
    this.setState({ order: event.target.value })
}


componentDidMount() {
    this.fetchArticles();
}

componentDidUpdate(prevProps, prevState) {
    const topicHasChanged = prevProps.topic !== this.props.topic
    const sortHasChanged = prevState.sort_by !== this.state.sort_by
    const orderHasChanged = prevState.order !== this.state.order
    if (topicHasChanged || sortHasChanged || orderHasChanged)
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
                <Sort handleSort={this.handleSort}/>
                <button onClick={this.handleOrder}>Order</button>
                <ul>
                    {articles.map((article) => {
                    return <ArticleCard key={article.article_id} {...article} />
                    })}
                </ul>
            </main>
            </>
        );
    }
}

export default ArticleList;