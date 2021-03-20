import React from 'react';
import { Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import Account from './Account';
import { FirebaseContext } from 'firebaseApi';
import { routesPath } from 'constants.js';

function Header() {
  const firebase = React.useContext(FirebaseContext);
  const history = useHistory();
  const [user] = useAuthState(firebase.auth);

  const signOut = async () => {
    try {
      await firebase.logout();
      history.push(routesPath.loginPage);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    user && (
      <Container>
        <Account buttonOnClick={signOut} userInfo={user.email || 'Guest'} />
      </Container>
    )
  );
}

export default React.memo(Header);
