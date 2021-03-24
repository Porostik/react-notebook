import React from 'react';
import { Typography, Button } from '@material-ui/core';
import useStyles from './styles';

function Account({ userInfo, buttonOnClick }) {
  const styles = useStyles();

  return (
    <>
      <Typography className={styles.userInfo}>{userInfo}</Typography>
      <Button className={styles.button} onClick={buttonOnClick}>
        Выйти
      </Button>
    </>
  );
}

export default Account;
