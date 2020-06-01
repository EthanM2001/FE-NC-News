import React, { Component } from 'react';
import * as api from '../../utils/api';

class VoteIncrementer extends Component {

state = {
    inc_votes: 0,
    isLoading: true,
};

handleVotes = (event) => {
    this.setState(({ inc_votes }) => {
        return {
            inc_votes: inc_votes + event
        }
    })

const { article_id } = this.props;
const inc_votes = event;
    if (article_id) {
        return api.patchVotesById(article_id, inc_votes)
        .catch((err) => {
            this.setState(({ inc_votes })  => {
                return {
                    inc_votes: inc_votes - event,
                }
            })
        })
    }
}

render() {
        const { votes, article_id } = this.props;
        const { inc_votes } = this.state;
        return (
            <>
            <button className="IncrementButton" onClick={() => this.handleVotes(1, article_id)} disabled={inc_votes > 0}>
                <span role="img" aria-label="increment">
                    Increment: 👆
                </span>
            </button>
            <p className="pVotes">Votes: {votes + inc_votes}</p>
            <button className = "DecrementButton" onClick={() => this.handleVotes(-1, article_id)} disabled = {inc_votes < 0}>
                <span role="img" aria-label="decrement">
                    Decrement: 👇
                </span>
            </button>
            </>
        );
    }
}

export default VoteIncrementer;