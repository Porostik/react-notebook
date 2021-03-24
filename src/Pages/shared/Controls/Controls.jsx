import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';

import useStyles from './styles';

function Controls({ isLoading, children }) {
  const styles = useStyles();
  return (
    <Box className={styles.controls}>
      {isLoading ? <CircularProgress size={60} className={styles.loader} /> : children}
    </Box>
  );
}

export default Controls;
