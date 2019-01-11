import {
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import { Link } from 'react-router-dom';

const styles = () => ({
  cardLink: {
    textDecoration: 'none'
  }
});

const ArticleItemIsLoading = () => (
  <Grid item>
    <CircularProgress size={80} thickness={6} />
  </Grid>
);

let ArticleItem = props => (
  <Grid item>
    <Card>
      <CardContent>
        <LinesEllipsis
          text={props.article.title}
          ellipsis='...'
          trimRight
          basedOn='letters'
          component='h2'
        />
        <LinesEllipsis
          align='justify'
          text={props.article.body}
          maxLine='2'
          ellipsis='...'
          trimRight
          basedOn='letters'
          component='p'
        />
        <Typography
          variant='subtitle1'
          color='primary'
          component={Link}
          to={`/articles/${props.article.id}`}
          className={props.classes.cardLink}
        >
          Continue reading...
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

ArticleItem = withStyles(styles)(ArticleItem);

export {
  ArticleItem,
  ArticleItemIsLoading
};
