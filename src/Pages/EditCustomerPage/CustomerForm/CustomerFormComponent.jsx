import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, Grid, TextareaAutosize } from '@material-ui/core';

import FormInput from 'Pages/shared/Input';
import FormCheckbox from 'Pages/shared/Checkbox';
import SocialsComponent from './Socials/SocialsComponent';
import useStyles from './styles';
import customerFormValidator from './validators';

function CustomerFormComponent({ initialValue, onSubmit }) {
  const styles = useStyles();

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={(values) => onSubmit(values)}
      validationSchema={customerFormValidator}
      validateOnBlur={true}>
      {({ values }) => (
        <Form className={styles.form}>
          <Grid container justify="space-between" spacing={3}>
            <Grid item container justify="center" xs={4}>
              <Field as={FormInput} name="fullName.firstname" placeholder="Имя" />
            </Grid>
            <Grid item container justify="center" xs={4}>
              <Field as={FormInput} name="fullName.surname" placeholder="Фамилия" />
            </Grid>
            <Grid item container justify="center" xs={4}>
              <Field as={FormInput} name="fullName.lastname" placeholder="Отчество" />
            </Grid>
            <Grid item container justify="center">
              <SocialsComponent socials={values.socials} />
            </Grid>
            <Grid item container justify="center">
              <Field className={styles.textarea} as={TextareaAutosize} name="description" />
            </Grid>
            <Grid item container justify="center" xs={6}>
              <Field as={FormCheckbox} name="isImportant" labelText="Важный клиент" />
            </Grid>
            <Grid item container justify="center" xs={6}>
              <Button type="submit" className={styles.submitButton}>
                Сохранить
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default CustomerFormComponent;
