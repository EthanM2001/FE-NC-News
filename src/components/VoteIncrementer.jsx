import React, { Component } from 'react';
import * as api from '../utils/api';

class VoteIncrementer extends Component {

state = {
    inc_votes: 0,
};

handleIncrement = (event) => {
    // SETTING STATE OPTIMISTICALLY
    this.setState(({ inc_votes }) => {
        return {
            inc_votes: inc_votes + 1,
        }
    })
    // MAKING API REQUEST
    const { article_id } = this.props;
    api.patchVotesById(article_id)
}


render() {
    const { votes } = this.props;
        const { inc_votes } = this.state;
        return (
            <>
            <button onClick={this.handleIncrement} disabled={inc_votes !== 0}>
                <span role="img" aria-label="increment">
                    👆
                </span>
            </button>
            <p>Votes: {votes + inc_votes}</p>
            </>
        );
    }
}

export default VoteIncrementer;