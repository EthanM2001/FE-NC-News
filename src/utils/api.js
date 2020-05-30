import axios from "axios";

export const getArticles = (topic) => {
  return axios
    .get("https://ethans-first-app.herokuapp.com/api/articles", {
      params: { topic },
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const getArticleById = (article_id) => {
  return axios
    .get(`https://ethans-first-app.herokuapp.com/api/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const getComments = (article_id) => {
  return axios
    .get(
      `https://ethans-first-app.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const patchVotesById = (article_id) => {
  return axios
    .patch(
      `https://ethans-first-app.herokuapp.com/api/articles/${article_id}`,
      { inc_votes: 1 }
    )
    .then(({ data: { articles } }) => {
      return articles.votes;
    });
};

export const postComment = (article_id, username, body) => {
  return axios.post(
    `https://ethans-first-app.herokuapp.com/api/articles/${article_id}/comments`,
    {
      username: username,
      body: body,
    }
  );
};
