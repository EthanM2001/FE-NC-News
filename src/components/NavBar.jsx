import React, { Component } from 'react';
import axios from 'axios';
import {Link} from '@reach/router'

class NavBar extends Component {

state = {
    topics: [],
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
}

    render() {
        return (
        <nav className="nav">
            <li><Link to="/">Home</Link></li>
            {this.state.topics.map(({slug}) => {
                return <li key={slug}><Link to={`/topics/${slug}`}>{slug.charAt(0).toUpperCase() + slug.slice(1)}</Link></li>
            })}
        </nav>
        );
    }
}

export default NavBar;