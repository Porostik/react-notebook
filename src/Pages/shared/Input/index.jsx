import React from 'react';
import { useField } from 'formik';
import { TextField, FormControl, FormHelperText } from '@material-ui/core';

import useStyles from './styles';

function FormInput(props) {
  const [field, meta] = useField(props);
  const styles = useStyles();

  return (
    <FormControl className={styles.rootControl}>
      <TextField
        className={styles.input}
        variant="outlined"
        error={meta.error && meta.touched}
        {...field}
        {...props}
      />
      {meta.error && meta.touched && (
        <FormHelperText className={styles.error}>{meta.error}</FormHelperText>
      )}
    </FormControl>
  );
}

export default FormInput;
