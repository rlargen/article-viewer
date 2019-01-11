import { CssBaseline, Grid } from '@material-ui/core';
import React from 'react';

import Article from '../article/Article';

const App = () => (
  <Grid container spacing={0}>
    <CssBaseline />
    <Article />
  </Grid>
);

export default App;