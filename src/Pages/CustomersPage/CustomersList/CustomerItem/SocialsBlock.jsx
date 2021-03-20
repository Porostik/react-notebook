import React from 'react';
import { Box } from '@material-ui/core';

import { socilas } from 'constants.js';
import SocialsItem from './SocialsItem';
import useStyles from './styles';

function SocialsBlock({ socialsList }) {
  const styles = useStyles();
  return (
    <Box className={styles.socialsList}>
      {socialsList.map((item, index) => (
        <SocialsItem key={index} icon={socilas[item.name]} socialUrl={item.url} />
      ))}
    </Box>
  );
}

export default SocialsBlock;
