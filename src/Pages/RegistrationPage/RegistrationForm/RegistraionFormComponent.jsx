import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button } from '@material-ui/core';

import useStyles from './styles';
import Input from '../../shared/Input';
import validator from './validation';

function RegistraionFormComponent({ onSubmit }) {
  const styles = useStyles();

  return (
    <Formik
      initialValues={{ email: '', password: '', repeatedPassword: '' }}
      validateOnBlur={true}
      validationSchema={validator}
      onSubmit={(values) => onSubmit({ email: values.email, password: values.password })}>
      {() => (
        <Form autoComplete="false" className={styles.form}>
          <Field placeholder="Электронная почта" as={Input} name="email" />
          <Field placeholder="Пароль" type="password" as={Input} name="password" />
          <Field
            placeholder="Повторите пароль"
            type="password"
            as={Input}
            name="repeatedPassword"
          />
          <Button className={styles.button} type="submit">
            Зарегистрироваться
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default RegistraionFormComponent;
