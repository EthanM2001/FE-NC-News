import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../../utils/api';
import ErrorDisplayer from './ErrorDisplayer';
import Loading from './Loading';

class NavBar extends Component {

state = {
    topics: [],
    isLoading: true,
    err: ''
}

componentDidMount() {
    this.fetchTopics()
}

fetchTopics = () => {
    api.getTopics()
    .then(({ data }) => {
        this.setState({topics : data.topics, isLoading: false})
    })
    .catch(err => {
        this.setState({ err: err.response.data.msg, isLoading: false})
    })
}

    render() {
        const { err, isLoading } = this.state
        if (err) return <ErrorDisplayer />
        if (isLoading) return <Loading />
        return (
        <nav className="nav">
            <ul className="topicsList">
            <li><Link to="/">Home</Link></li>
            {this.state.topics.map(({slug}) => {
                return <li key={slug}><Link to={`/topics/${slug}`}>{slug}</Link></li>
            })}
            </ul>
        </nav>
        );
    }
}

export default NavBar;