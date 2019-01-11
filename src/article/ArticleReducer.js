import {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  CREATE_ARTICLE_SUCCESS,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE
} from './ArticleActions';
import article from './ArticleModel';

const initialState = {
  articles: [],
  isLoading: false,
  article,
  errorArticle: ''
};

const articleReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ARTICLES_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      });
    case FETCH_ARTICLES_SUCCESS:
      return Object.assign({}, state, {
        articles: [].concat(
          state.articles,
          action.articles
        ),
        isLoading: false
      });
    case CREATE_ARTICLE_SUCCESS:
      return Object.assign({}, state, {
        articles: [].concat(
          state.articles, [action.article]
        )
      });
    case FETCH_ARTICLE_SUCCESS:
      return Object.assign({}, state, {
        article: Object.assign(
          {},
          state.article,
          { ...action.article }
        ),
        errorArticle: ''
      });
    case FETCH_ARTICLE_FAILURE:
      return Object.assign({}, state, {
        article: Object.assign(
          {},
          state.article,
          { ...article }
        ),
        errorArticle: action.error
      });
    default:
      return state;
  }
};

export default articleReducer;
