import { Button, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { fetchArticle } from './ArticleActions';

const styles = theme => ({
  article: {
    marginTop: theme.spacing.unit
  }
});

const ArticleDetailError = props => (
  <Typography
    paragraph
    variant='h4'
    align='justify'
    color='error'
  >
    { props.error }
  </Typography>
);

const ArticleDetailDescription = props => (
  <React.Fragment>
    <Typography gutterBottom variant='h4'>
      { props.article.title }
    </Typography>
    <Typography
      paragraph
      component='p'
      variant='subtitle1'
      align='justify'
    >
      { props.article.body }
    </Typography>
  </React.Fragment>
);

const ArticleDetail = props => (
  <React.Fragment>
    <Typography variant='h3'>
      Detail of an article
    </Typography>
    <Grid
      item
      component='article'
      className={props.classes.article}
    >
      {
        props.errorArticle ? (
          <ArticleDetailError
            error={props.errorArticle}
          />
        ) : (
          <ArticleDetailDescription
            article={props.article}
          />
        )
      }
    </Grid>
    <Grid item>
      <Button
        onClick={props.redirect}
        size='large'
        type='button'
        variant='outlined'
      >
        Close
      </Button>
    </Grid>
  </React.Fragment>
);

class ArticleDetailContainer extends Component {
  componentDidMount() {
    let articleId = this.props.match.params.articleId;
    this.props.fetchArticle(articleId);
  }

  componentDidUpdate(prevProps) {
    let prevArticleId = prevProps.match.params.articleId;
    let articleId = this.props.match.params.articleId;
    if (prevArticleId !== articleId) {
      this.props.fetchArticle(articleId);
    }
  }

  redirectToCreateArticle = () => {
    this.props.history.push('/articles');
  }

  render() {
    return (
      <ArticleDetail
        article={this.props.article}
        errorArticle={this.props.errorArticle}
        redirect={this.redirectToCreateArticle}
        classes={this.props.classes}
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    article: state.article.article,
    errorArticle: state.article.errorArticle,
    classes: props.classes
  };
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    { fetchArticle }
  )
)(ArticleDetailContainer);
