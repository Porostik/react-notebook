import { TextField } from '@material-ui/core';
import { useField } from 'formik';
import React from 'react';

import useStyles from './styles';

function SocialInput({ ...props }) {
  const styles = useStyles();
  const [field, meta] = useField(props);

  return (
    <TextField
      variant="outlined"
      error={meta.touched && meta.error}
      {...field}
      className={styles.input}
    />
  );
}

export default SocialInput;
