import React from 'react';
import { Box, Typography } from '@material-ui/core';

import useStyles from './styles';

function CustomersListPlaceholder({ text }) {
  const styles = useStyles();

  return (
    <Box className={styles.paceholderBox}>
      <Typography className={styles.paceholderText}>{text}</Typography>
    </Box>
  );
}

export default CustomersListPlaceholder;
