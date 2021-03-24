import React from 'react';
import { Box, Typography } from '@material-ui/core';

import { socilas } from 'constants.js';
import SocialsItem from './SocialsItem';
import useStyles from './styles';

function SocialsBlock({ socialsList }) {
  const styles = useStyles();

  return (
    <Box className={styles.socialsList}>
      {socialsList.length > 0 ? (
        socialsList.map((item, index) => (
          <SocialsItem key={index} icon={socilas[item.name]} socialUrl={item.url} />
        ))
      ) : (
        <Typography className={styles.socialsPlaceholder}>
          Вы не добавили соцальных сетей
        </Typography>
      )}
    </Box>
  );
}

export default SocialsBlock;
