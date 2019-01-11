import Grid from '@material-ui/core/Grid';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import ArticleList from './ArticleList';
import ArticleRouter from './ArticleRouter';

const Article = () => (
  <Grid
    container
    direction='row'
    justify='space-evenly'
    id='article'
  >
    <Grid item xs={3}>
      <ArticleList />
    </Grid>
    <Grid item xs={6}>
      <ArticleRouter />
    </Grid>
    <Redirect to='/articles' />
  </Grid>
);

export default withRouter(Article);
