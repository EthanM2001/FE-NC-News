import React from "react";
import VoteIncrementer from "../Resuable/VoteIncrementer";

const CommentCard = ({
  article_id,
  author,
  body,
  votes,
  username,
  created_at,
  comment_id,
  deleteComment
}) => {
    return (
      <article className="eachComment">
      <h2>
        This comment was posted by {author} on{" "}
        {new Date(created_at).toLocaleDateString()}:
      </h2>
      <p>{body}</p>
      <VoteIncrementer
        article_id={article_id}
        votes={votes}
        comment_id={comment_id}
      />
       {username === author && <button onClick={(event) => deleteComment(comment_id)}>
         Delete
         </button>}
    </article>
  );
    }

export default CommentCard;
