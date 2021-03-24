import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';

import useStyles from './styles';

function PagePlaceholder() {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <CircularProgress size={100} className={styles.loader} />
    </Box>
  );
}

export default PagePlaceholder;
