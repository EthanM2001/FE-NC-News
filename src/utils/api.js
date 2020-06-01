import axios from "axios";

const baseURL = 'https://ethans-first-app.herokuapp.com/api'

export const getArticles = (topic, order, sort_by) => {
  return axios
    .get(`${baseURL}/articles`, {
      params: { topic: topic, order: order, sort_by: sort_by },
    })
    .then(({ data: { articles } }) => {
      return articles;
    })
};

export const getArticleById = (article_id) => {
  console.log(article_id)
  return axios
    .get(`${baseURL}/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const getComments = (article_id) => {
  return axios
    .get(
      `${baseURL}/articles/${article_id}/comments`
    )
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const patchVotesById = (article_id) => {
  return axios
    .patch(
      `${baseURL}/articles/${article_id}`,
      { inc_votes: 1 }
    )
    .then(({ data: { articles } }) => {
      return articles.votes;
    });
};

export const postComment = (article_id, username, body) => {
  return axios
  .post(`${baseURL}/articles/${article_id}/comments`,
    {
      username: username,
      body: body,
    }
  );
};

export const deleteCommentById = (comment_id) => {
  return axios
  .delete(`${baseURL}/comments/${comment_id}`)
}