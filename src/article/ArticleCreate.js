import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { reduxForm, Form, Field } from 'redux-form';
import * as Yup from 'yup';

import renderTextField from '../common/form/field';
import asyncValidate from '../common/form/validate';
import { saveArticle } from './ArticleActions';
import article from './ArticleModel';

const ArticleCreate = props => (
  <React.Fragment>
    <Typography variant='h3'>
      Create an article
    </Typography>
    <Form onSubmit={props.handleSubmit}>
      <Field
        component={renderTextField}
        label='Title'
        name='title'
        placeholder='Title of an article'
        type='text'
      />
      <Field
        component={renderTextField}
        label='Body'
        name='body'
        multiline={true}
        placeholder='Body of an article'
        rows={2}
      />
      <Grid container spacing={16}>
        <Grid item>
          <Button
            color='primary'
            disabled={
              props.pristine || props.invalid || props.submitting
            }
            size='large'
            type='submit'
            variant='outlined'
          >
            Submit
          </Button>
        </Grid>
        <Grid item>
          <Button
            disabled={props.pristine || props.submitting}
            onClick={props.reset}
            size='large'
            type='button'
            variant='outlined'
          >
            Clear Values
          </Button>
        </Grid>
      </Grid>
    </Form>
  </React.Fragment>
);

const articleSchema = Yup.object().shape({
  title: Yup.string()
    .required()
    .max(
      255,
      'Title has to be shorter than 256 characters.'
    ),
  body: Yup.string()
});

export default reduxForm({
  form: 'article',
  initialValues: article,
  asyncValidate: asyncValidate(articleSchema),
  asyncBlurFields: [
    'title',
    'body'
  ],
  onSubmit: (values, dispatch) => {
    return saveArticle(values, dispatch);
  }
})(ArticleCreate);
