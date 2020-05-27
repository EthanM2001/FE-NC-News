import React from 'react';
import { Link } from '@reach/router'

const ArticleCard = ({article_id, title, votes, topic, author, created_at, comment_count}) => {

    return (
        <article className="eachArticle">
            <h3><Link to={`/articles/${article_id}`} key={article_id}>{title}</Link></h3>
            <h4>{topic}<br></br>
            {author}<br></br>
            {new Date(created_at).toLocaleDateString()}<br></br>
            Total Comments: {comment_count}</h4>
            <p>{votes}</p>
        </article>
    );
};

export default ArticleCard;
