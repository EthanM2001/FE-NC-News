import React, { Component } from 'react';

class VoteIncrementer extends Component {

state = {
    userVotes: 0,
};

    render() {
        const { votes } = this.props;
        const { userVotes } = this.state
        return (
            <>
            <button>
                <span role="img" aria-label="increment">
                    👆
                </span>
            </button>
            <p>Votes: {votes + userVotes}</p>
            </>
        );
    }
}

export default VoteIncrementer;