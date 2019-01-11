import { SubmissionError } from 'redux-form';
import apiClient from './ArticleServer';

const FETCH_ARTICLES_REQUEST = 'FETCH_ARTICLES_REQUEST';

function fetchArticlesRequest () {
  return { type: FETCH_ARTICLES_REQUEST };
}

const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';

function fetchArticlesSuccess (response) {
  const articles = response.data;
  return {
    type: FETCH_ARTICLES_SUCCESS,
    articles: articles.slice(
      articles.length - 3,
      articles.length
    )
  }
}

function fetchArticles () {
  return function (dispatch) {
    dispatch(fetchArticlesRequest());
    apiClient.fetchArticles()
      .then((resp) => {
        dispatch(fetchArticlesSuccess(resp));
      });
  }
}

const CREATE_ARTICLE_SUCCESS = 'CREATE_ARTICLE_SUCCESS';

function createArticleSuccess (response) {
  return {
    type: CREATE_ARTICLE_SUCCESS,
    article: response.data
  };
}

function createArticleFailure (error) {
  throw new SubmissionError(error);
}

function saveArticle (article, dispatch) {
  return apiClient.createArticle(article)
    .then((resp) => { dispatch(createArticleSuccess(resp)) })
    .catch((err) => { createArticleFailure(err) });
}

const FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS';

function fetchArticleSuccess (response) {
  return {
    type: FETCH_ARTICLE_SUCCESS,
    article: response.data
  }
}

const FETCH_ARTICLE_FAILURE = 'FETCH_ARTICLE_FAILURE';

function fetchArticleFailure (error) {
  if (error.response.status === 404) {
    error = 'This article does not exist';
  }
  return {
    type: FETCH_ARTICLE_FAILURE,
    error: error
  }
}

function fetchArticle (articleId) {
  return function (dispatch) {
    apiClient.fetchArticle(articleId)
      .then((resp) => {
        dispatch(fetchArticleSuccess(resp));
      })
      .catch((err) => {
        dispatch(fetchArticleFailure(err));
      });
  }
}

export {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  fetchArticles,
  CREATE_ARTICLE_SUCCESS,
  saveArticle,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE,
  fetchArticle
};
