import axios from 'axios'

export const getArticles = () => {
   return axios
    .get('https://ethans-first-app.herokuapp.com/api/articles')
    .then(({ data: { articles } }) => {
        return articles
    })
}

export const getArticleById = (article_id) => {
    return axios
        .get(`https://ethans-first-app.herokuapp.com/api/articles/${article_id}`)
        .then(({ data: { article } }) => {
            return article
        })
}

export const getComments = (article_id) => {
    return axios
    .get(`https://ethans-first-app.herokuapp.com/api/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
        return comments
    })
}

export const patchVotesById = (article_id, inc_votes) => {
    return axios
    .patch(`https://ethans-first-app.herokuapp.com/api/articles/${article_id}`, {inc_votes: 1})
    .then(({data : { articles}}) => {
        return articles.votes
    })
}