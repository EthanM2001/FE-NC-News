import React from 'react';
import VoteIncrementer from './VoteIncrementer';

const CommentCard = ({author, created_at, body }) => {
    return (
        <article className="eachComment">
            <h2>This comment was posted by {author} on {created_at}:</h2>
            <p>{body}</p>
            <VoteIncrementer />
        </article>
    );
};

export default CommentCard;