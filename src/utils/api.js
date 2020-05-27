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