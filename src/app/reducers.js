import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import articleReducer from '../article/ArticleReducer';

const rootReducer = combineReducers({
  article: articleReducer,
  form: formReducer
});

export default rootReducer;
