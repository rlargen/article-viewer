import { TextField } from '@material-ui/core';
import React from 'react';

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    fullWidth={true}
    label={label}
    margin='normal'
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    variant='outlined'
    {...input}
    {...custom}
  />
);

export default renderTextField;
