import React from 'react';
import { MenuItem, Select } from '@material-ui/core';
import { useField } from 'formik';

import { socialsArr } from 'constants.js';
import useStyles from './styles';

function SocialsSelect(props) {
  const [field] = useField(props);
  const styles = useStyles();

  return (
    <Select
      {...field}
      variant="outlined"
      className={styles.select}
      MenuProps={{ classes: { paper: styles.selectMenu } }}>
      {socialsArr.map((item, index) => {
        const Component = item.component;
        return (
          <MenuItem key={index} value={item.name}>
            <Component className={styles.socialIcon} />
          </MenuItem>
        );
      })}
    </Select>
  );
}

export default SocialsSelect;
