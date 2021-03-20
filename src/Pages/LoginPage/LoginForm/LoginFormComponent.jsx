import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, FormHelperText } from '@material-ui/core';

import useStyles from './styles';
import Input from '../../shared/Input';
import validator from './validation';

function LoginPageComponent({ onSubmit }) {
  const styles = useStyles();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validateOnBlur={true}
      validationSchema={validator}
      onSubmit={(values, { setStatus }) => onSubmit(values, setStatus)}>
      {({ status }) => (
        <Form autoComplete="false" className={styles.loginForm}>
          {status && <FormHelperText className={styles.statusTest}>{status}</FormHelperText>}
          <Field placeholder="Электронная почта" as={Input} name="email" />
          <Field placeholder="Пароль" type="password" as={Input} name="password" />
          <Button className={styles.button} type="submit">
            Войти
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginPageComponent;
