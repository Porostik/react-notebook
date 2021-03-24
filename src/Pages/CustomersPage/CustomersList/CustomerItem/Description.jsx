import React from 'react';
import { Box, Button, Collapse, Typography } from '@material-ui/core';

import useStyles from './styles';

function Description({ isOpen, onDelete, onEdit, description }) {
  const styles = useStyles();

  return (
    <Collapse className={styles.descriptionWrap} in={isOpen}>
      <Box className={styles.descriptionBlock}>
        <Typography component="p" className={styles.description}>
          {description}
        </Typography>
        <Box className={styles.buttonWrap}>
          <Button className={styles.deleteButton} onClick={onDelete}>
            Удалить
          </Button>
          <Button className={styles.descriptionButton} onClick={onEdit}>
            Изменить
          </Button>
        </Box>
      </Box>
    </Collapse>
  );
}

export default Description;
