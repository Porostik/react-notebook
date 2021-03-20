import React from 'react';
import { PriorityHigh, ExpandMore } from '@material-ui/icons';
import {
  ListItem,
  ListItemAvatar,
  Collapse,
  ListItemIcon,
  Avatar,
  Typography,
  Box,
  IconButton,
  Button,
} from '@material-ui/core';
import useStyles from './styles';
import SocialsBlock from './SocialsBlock';
import { useHistory } from 'react-router-dom';
import { routesPath } from 'constants.js';

function CustomerItem({ customer }) {
  const [isDesriptionOpen, setDesriptionOpen] = React.useState(false);
  const history = useHistory();
  const styles = useStyles();

  return (
    <ListItem className={styles.root}>
      <Box className={styles.mainInfo}>
        {customer.isImportant && (
          <ListItemIcon className={styles.importantItem}>
            <PriorityHigh />
          </ListItemIcon>
        )}
        <ListItemAvatar className={styles.avatarIcon}>
          <Avatar className={styles.avatar}>RS</Avatar>
        </ListItemAvatar>
        <Box className={styles.nameBlock}>
          <Typography>{customer.fullName.firstname}</Typography>
          <Typography>{customer.fullName.surname}</Typography>
          <Typography>{customer.fullName.lastname}</Typography>
        </Box>
        <SocialsBlock socialsList={Object.values(customer.socials)} />
        <IconButton onClick={() => setDesriptionOpen((prev) => !prev)}>
          <ExpandMore />
        </IconButton>
      </Box>
      <Collapse in={isDesriptionOpen}>
        <Box className={styles.descriptionBlock}>
          <Typography component="p" className={styles.description}>
            {customer.description}
          </Typography>
          <Button
            className={styles.descriptionButton}
            onClick={() => history.push(`${routesPath.editCustomerPage}/${customer.uid}`)}>
            Изменить
          </Button>
        </Box>
      </Collapse>
    </ListItem>
  );
}

export default CustomerItem;
