import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { fetchArticles } from './ArticleActions';
import {
  ArticleItem,
  ArticleItemIsLoading
} from './ArticleItem';

const styles = theme => ({
  mainGrid: {
    marginTop: theme.spacing.unit
  }
});

const ArticleList = (props) => (
  <React.Fragment>
    <Typography variant="h3">
      List articles
    </Typography>
    <Grid
      container
      component='nav'
      direction='column'
      spacing={24}
      className={props.classes.mainGrid}
    >
      {
        props.isLoading ? (
          <ArticleItemIsLoading />
        ) : props.articles.map(article => (
          <ArticleItem
            key={article.id}
            article={article}
          />
        ))
      }
    </Grid>
  </React.Fragment>
);

class ArticleListContainer extends Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    return (
      <ArticleList
        articles={this.props.articles}
        isLoading={this.props.isLoading}
        classes={this.props.classes}
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    articles: state.article.articles,
    isLoading: state.article.isLoading,
    classes: props.classes
  };
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    { fetchArticles }
  )
)(ArticleListContainer);
