import React from 'react';
import { Box, CssBaseline, Container } from '@material-ui/core';

import { Header, PagesRoutes } from './Components';
import useStyles from './AppStyles';

function App() {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <CssBaseline />
      <Header />
      <Container>
        <Box className={styles.main}>
          <PagesRoutes />
        </Box>
      </Container>
    </Box>
  );
}

export default App;
