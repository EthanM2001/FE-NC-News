import React from 'react';

const ArticleCard = ({article_id, title, votes, topic, author, created_at, comment_count}) => {
    return (
        <article className="eachArticle">
            <h3>{title}<br></br>{author}<br></br>{topic}<br></br>{created_at}</h3>
        </article>
    );
};

export default ArticleCard;

// consider layout