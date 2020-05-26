import React from 'react';

const ArticleCard = ({article_id, title, votes, topic, author, created_at, comment_count}) => {

    return (
        <article className="eachArticle">
            <h3>{title}</h3>
            <h4>{topic}<br></br>{author}<br></br>{created_at}<br></br>Total Comments: {comment_count}</h4>
            <p className="votes">{votes}</p>
        </article>
    );
};

export default ArticleCard;

// consider layout