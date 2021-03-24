import React from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';

import useStyles from './styles';

function ParamItem({ text, isChecked, onChange, name }) {
  const styles = useStyles();

  const handleChange = (e) => {
    onChange(name, e.target.checked);
  };

  return (
    <FormControlLabel
      className={styles.paramText}
      control={<Checkbox onChange={handleChange} checked={isChecked} className={styles.checkbox} />}
      label={text}
    />
  );
}

export default ParamItem;
