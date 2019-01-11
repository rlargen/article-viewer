const asyncValidate = schema => formValues => {
  return schema.validate(formValues, { abortEarly: false })
    .then(() => {})
    .catch((errors) => {
      const test = errors.inner.reduce(
        (errors, err) => ({
          ...errors,
          [err.path]: err.message
        }),
        {}
      );
      throw test;
    });
}

export default asyncValidate;
