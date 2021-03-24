import React from 'react';
import { PriorityHigh, ExpandMore } from '@material-ui/icons';
import {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  Avatar,
  Typography,
  Box,
  IconButton,
} from '@material-ui/core';

import useStyles from './styles';
import SocialsBlock from './SocialsBlock';
import { routesPath } from 'constants.js';
import Description from './Description';
import { useHistory } from 'react-router';

function CustomerItem({ customer, deleteCustomer }) {
  const styles = useStyles();
  const [isDesriptionOpen, setDesriptionOpen] = React.useState(false);
  const history = useHistory();

  const editCustomer = () => history.push(`${routesPath.editCustomerPage}/${customer.uid}`);

  return (
    <ListItem className={styles.root}>
      <Box className={styles.mainInfo}>
        {customer.isImportant && (
          <ListItemIcon className={styles.importantItem}>
            <PriorityHigh />
          </ListItemIcon>
        )}
        <ListItemAvatar className={styles.avatarIcon}>
          <Avatar className={styles.avatar}>{customer.initials}</Avatar>
        </ListItemAvatar>
        <Box className={styles.nameBlock}>
          <Typography>{customer.fullName.surname}</Typography>
          <Typography>{customer.fullName.firstname}</Typography>
          <Typography>{customer.fullName.lastname}</Typography>
        </Box>
        <SocialsBlock socialsList={Object.values(customer.socials)} />
        <IconButton onClick={() => setDesriptionOpen((prev) => !prev)}>
          <ExpandMore />
        </IconButton>
      </Box>
      <Description
        isOpen={isDesriptionOpen}
        onDelete={deleteCustomer}
        onEdit={editCustomer}
        description={customer.description}
      />
    </ListItem>
  );
}

export default CustomerItem;
