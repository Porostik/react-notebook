import React from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';

import useStyles from './styles';
import { useField } from 'formik';

function FormCheckbox({ labelText, ...props }) {
  const styles = useStyles();
  const [field] = useField(props);

  return (
    <FormControlLabel
      control={<Checkbox checked={field.value} className={styles.checkBox} {...field} />}
      label={labelText}
    />
  );
}

export default FormCheckbox;
