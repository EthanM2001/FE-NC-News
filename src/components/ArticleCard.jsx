import React from 'react';
import { Link } from '@reach/router'

const ArticleCard = ({article_id, title, votes, topic, author, created_at, comment_count}) => {

    return (
        <article className="eachArticle">
            <h3><Link to={`/articles/${article_id}`}>{title}</Link></h3>
            <h4>{topic.charAt(0).toUpperCase() + topic.slice(1)}<br></br>{author}<br></br>{created_at}<br></br>Total Comments: {comment_count}</h4>
            <p className="votes">{votes}</p>
        </article>
    );
};

export default ArticleCard;
