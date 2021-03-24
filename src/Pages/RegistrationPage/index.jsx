import React from 'react';
import { Box, Typography } from '@material-ui/core';

import useStyles from './styles';
import RegistrationForm from './RegistrationForm';

function RegistrationPage() {
  const styles = useStyles();

  return (
    <Box className={styles.loginPageRoot}>
      <Typography className={styles.title} variant="h3" component="h1">
        Регистрация
      </Typography>
      <RegistrationForm />
    </Box>
  );
}

export default RegistrationPage;
