import React, { Component } from 'react';
import axios from 'axios';
import { Link } from '@reach/router'
import ErrorDisplayer from './ErrorDisplayer';

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
    axios
    .get('https://ethans-first-app.herokuapp.com/api/topics')
    .then(({ data }) => {
        this.setState({topics : data.topics})
    })
    .catch(err => {
        this.setState({ err: err.response.data.msg, isLoading: false})
    })
}

    render() {
        const { err } = this.state
        if (err) return <ErrorDisplayer />
        return (
        <nav className="nav">
            <li><Link to="/">Home</Link></li>
            {this.state.topics.map(({slug}) => {
                return <li key={slug}><Link to={`/topics/${slug}`}>{slug}</Link></li>
            })}
        </nav>
        );
    }
}

export default NavBar;