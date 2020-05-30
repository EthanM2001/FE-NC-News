import React, { Component } from 'react';
import * as api from '../../utils/api';

class VoteIncrementer extends Component {

state = {
    inc_votes: 0,
};

handleIncrement = (event) => {
    this.setState(({ inc_votes }) => {
        return {
            inc_votes: inc_votes + 1,
        }
    })
    const { article_id } = this.props;
    api.patchVotesById(article_id)
    .catch((err) => {
        this.setState(({ inc_votes }) => {
            return {
                inc_votes: inc_votes - 1
            }
        })
    })
}

handleDecrement = (event) => {
    this.setState(({ inc_votes }) => {
        return {
            inc_votes: inc_votes - 1,
        }
    })
    const { article_id } = this.props;
    api.patchVotesById(article_id)
    .catch((err) => {
        this.setState(({ inc_votes}) => {
            return {
                inc_votes: inc_votes + 1
            }
        })
    })
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
            <button onClick={this.handleDecrement} disabled = {inc_votes !== 0}>
                <span role="img" aria-label="decrement">
                    👇
                </span>
            </button>
            </>
        );
    }
}

export default VoteIncrementer;