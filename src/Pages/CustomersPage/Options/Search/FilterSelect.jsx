import React from 'react';
import { MenuItem, Select } from '@material-ui/core';
import { useField } from 'formik';

import { filterValues } from 'constants.js';
import useStyles from './styles';

function FilterSelect(props) {
  const [field] = useField(props);
  const styles = useStyles();

  return (
    <Select
      {...field}
      variant="outlined"
      className={styles.select}
      MenuProps={{ classes: { paper: styles.selectMenu } }}
      defaultValue={filterValues[0].value}>
      {filterValues.map((item, index) => (
        <MenuItem key={index} value={item.value}>
          {item.replay}
        </MenuItem>
      ))}
    </Select>
  );
}

export default FilterSelect;
