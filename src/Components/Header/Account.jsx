import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import useStyles from './styles';

function Account({ userInfo, buttonOnClick }) {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <Typography className={styles.userInfo}>{userInfo}</Typography>
      <Button className={styles.button} onClick={buttonOnClick}>
        Выйти
      </Button>
    </Box>
  );
}

export default Account;
