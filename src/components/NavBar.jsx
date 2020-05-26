import React, { Component } from 'react';
import axios from 'axios';

class NavBar extends Component {

state = {
    topics: []
}

componentDidMount() {
    axios
    .get('https://ethans-first-app.herokuapp.com/api/topics')
    .then(({ data }) => {
        this.setState({topics : data.topics})
    })
}

    render() {
        return (
        <ul>
            {this.state.topics.map((topic) => {
                return <li key={topic.slug}>{topic.slug}</li>
            })}
        </ul>
        );
    }
}

export default NavBar;