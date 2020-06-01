import React from 'react';
import { Link } from '@reach/router'
import VoteIncrementer from '../Resuable/VoteIncrementer';

const ArticleCard = ({article_id, title, votes, topic, author, created_at, comment_count}) => {

    return (
        <article className="eachArticle">
            <h3><Link to={`/articles/${article_id}`} key={article_id}>{title}</Link></h3>
            <p>Topic: {topic} </p>
            <p><span role="img" aria-label="pen">✍️</span> {author}</p>
            <p><span role="img" aria-label="calander">📅</span> {new Date(created_at).toLocaleDateString()}</p>
            <p><span role="img" aria-label="comments">🗣</span> Total Comments: {comment_count}</p>
            <VoteIncrementer votes={votes} article_id={article_id}/>
        </article>
    );
};

export default ArticleCard;
