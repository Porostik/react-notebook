import { List } from '@material-ui/core';
import React from 'react';
import CustomerItem from './CustomerItem';

function CustomersListComponent({ list, editCustomerOnClick }) {
  return (
    <List>
      {list.map((item) => (
        <CustomerItem key={item.uid} customer={item} />
      ))}
    </List>
  );
}

export default CustomersListComponent;
