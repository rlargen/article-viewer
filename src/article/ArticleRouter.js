import React from 'react';
import { Route } from 'react-router-dom';

import ArticleCreate from './ArticleCreate';
import ArticleDetail from './ArticleDetail';

const ArticleRouter = () => (
  <React.Fragment>
    <Route exact path='/articles' component={ArticleCreate} />
    <Route exact path='/articles/:articleId' component={ArticleDetail} />
  </React.Fragment>
);

export default ArticleRouter;
