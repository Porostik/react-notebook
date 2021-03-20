import React from 'react';
import { Box, Typography, Link } from '@material-ui/core';

import { routesPath } from 'constants.js';
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
      <Link href={routesPath.loginPage} className={styles.link}>
        Войти
      </Link>
    </Box>
  );
}

export default RegistrationPage;
