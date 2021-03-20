import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';

import store from './redux/store';
import theme from './theme';
import { FirebaseContext, firebase } from './firebaseApi';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <FirebaseContext.Provider value={firebase}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FirebaseContext.Provider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
