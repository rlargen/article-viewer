import axios from 'axios';

const ROOT_URL = 'https://jsonplaceholder.typicode.com';

const apiClient = {
  fetchArticle: function (articleId) {
    return axios.get(`${ROOT_URL}/posts/${articleId}`);
  },
  fetchArticles: function () {
    return axios.get(`${ROOT_URL}/posts`);
  },
  createArticle: function (article) {
    return axios.post(`${ROOT_URL}/posts`, article);
  }
};

export default apiClient;