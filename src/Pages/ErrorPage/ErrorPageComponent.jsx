import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';

import useStyles from './styles';

function ErrorPageComponent({ buttonOnClick }) {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <Typography className={styles.text}>При обработке запроса произошла ошибка</Typography>
      <Button className={styles.button} onClick={buttonOnClick}>
        Вернуться на главную страницу
      </Button>
    </Box>
  );
}

export default ErrorPageComponent;
