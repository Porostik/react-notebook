import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Box, Button, Link } from '@material-ui/core';

import useStyles from './styles';
import Input from '../../shared/Input';
import validator from './validation';
import Controls from 'Pages/shared/Controls/Controls';
import { routesPath } from 'constants.js';

function RegistraionFormComponent({ onSubmit, isLoading }) {
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
          <Controls isLoading={isLoading}>
            <Box className={styles.buttonsBox}>
              <Button className={styles.button} type="submit">
                Зарегистрироваться
              </Button>
              <Link href={routesPath.rootRoute + routesPath.loginPage} className={styles.link}>
                Войти
              </Link>
            </Box>
          </Controls>
        </Form>
      )}
    </Formik>
  );
}

export default RegistraionFormComponent;
