import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Grid, IconButton, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';
import FilterSelect from './FilterSelect';
import { filterValues } from 'constants.js';

function SearchForm({ onSubmit }) {
  const styles = useStyles();

  return (
    <Formik
      initialValues={{ filterType: filterValues[0].value, searchValue: '' }}
      onSubmit={(values) => onSubmit(values)}>
      {() => (
        <Form>
          <Grid container justify="space-around" alignItems="center">
            <Field name="filterType" as={FilterSelect} />
            <Field name="searchValue" variant="outlined" className={styles.input} as={TextField} />
            <IconButton className={styles.button} type="submit">
              <SearchIcon />
            </IconButton>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default SearchForm;
