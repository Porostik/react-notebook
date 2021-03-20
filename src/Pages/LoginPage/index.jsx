import React from 'react';
import { Box, Typography, Link, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { routesPath, customersTypes } from 'constants.js';
import FirebaseContext from 'firebaseApi/FirebaseContext';
import useStyles from './styles';
import LoginForm from './LoginForm';

function LoginPage() {
  const styles = useStyles();
  const firebase = React.useContext(FirebaseContext);
  const history = useHistory();
  const dispatch = useDispatch();

  const guestSingIn = async () => {
    try {
      await firebase.loginAsGuest();
      dispatch({ type: customersTypes.openGusetWarning });
      history.push(routesPath.customersPage);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box className={styles.loginPageRoot}>
      <Typography className={styles.title} variant="h3" component="h1">
        Вход
      </Typography>
      <LoginForm />
      <Button className={styles.button} onClick={guestSingIn}>
        Войти как гость
      </Button>
      <Link href={routesPath.registrationPage} className={styles.link}>
        Зарегистрироваться
      </Link>
    </Box>
  );
}

export default LoginPage;
