import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { customersTypes, routesPath } from 'constants.js';
import FirebaseContext from 'firebaseApi/FirebaseContext';
import useStyles from './styles';
import LoginForm from './LoginForm/LoginFormComponent';
import { useDispatch } from 'react-redux';

function LoginPage() {
  const styles = useStyles();
  const history = useHistory();
  const firebase = React.useContext(FirebaseContext);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(false);

  const guestSingIn = async () => {
    setIsLoading(true);
    try {
      await firebase.loginAsGuest();
      history.push(routesPath.rootRoute + routesPath.customersPage);
      dispatch({ type: customersTypes.setDemo });
    } catch (e) {
      setIsLoading(false);
    }
  };

  const singIn = async (user, { setStatus }) => {
    setIsLoading(true);
    setStatus(false);
    try {
      await firebase.login(user.email, user.password);
      history.push(routesPath.rootRoute + routesPath.customersPage);
    } catch (e) {
      setStatus('Неверный лоигин или пароль');
      setIsLoading(false);
    }
  };

  return (
    <Box className={styles.loginPageRoot}>
      <Typography className={styles.title} variant="h3" component="h1">
        Вход
      </Typography>
      <LoginForm onSubmit={singIn} isLoading={isLoading} demoSingIn={guestSingIn} />
    </Box>
  );
}

export default LoginPage;
