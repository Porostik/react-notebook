import React from 'react';
import { Container, Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import Account from './Account';
import { FirebaseContext } from 'firebaseApi';
import { routesPath, customersTypes } from 'constants.js';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

function Header() {
  const styles = useStyles();
  const firebase = React.useContext(FirebaseContext);
  const history = useHistory();
  const [user] = useAuthState(firebase.auth);
  const dispatch = useDispatch();

  const signOut = async () => {
    try {
      await firebase.logout();
      history.push(routesPath.rootRoute + routesPath.loginPage);
      dispatch({ type: customersTypes.setInitialState });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <Box className={styles.root}>
        {user && <Account buttonOnClick={signOut} userInfo={user.email || 'Guest'} />}
      </Box>
    </Container>
  );
}

export default React.memo(Header);
