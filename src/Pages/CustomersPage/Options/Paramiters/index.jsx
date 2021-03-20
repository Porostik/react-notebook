import React from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import ParamItem from './ParamItem';
import { setParamiter } from 'Pages/CustomersPage/actions';
import { paramitersNames } from 'constants.js';

function Paramiters() {
  const paramiters = useSelector(({ customers }) => customers.paramiters);
  const dispatch = useDispatch();

  const changeParamiter = React.useCallback((name, value) => {
    dispatch(setParamiter(name, value));
  }, []);

  return (
    <Grid container>
      {Object.keys(paramiters).map((item, index) => (
        <Grid key={index} item container justify="center">
          <ParamItem
            text={paramitersNames[item]}
            onChange={changeParamiter}
            isChecked={paramiters[item]}
            name={item}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Paramiters;
