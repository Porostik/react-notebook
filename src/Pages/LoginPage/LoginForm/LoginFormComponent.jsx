import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, FormHelperText, Box, Link } from '@material-ui/core';

import useStyles from './styles';
import Input from '../../shared/Input';
import validator from './validation';
import Controls from '../../shared/Controls/Controls';
import { routesPath } from 'constants.js';

function LoginPageComponent({ onSubmit, isLoading, demoSingIn }) {
  const styles = useStyles();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validateOnBlur={true}
      validationSchema={validator}
      onSubmit={onSubmit}>
      {({ status }) => (
        <Form autoComplete="false" className={styles.loginForm}>
          {status && <FormHelperText className={styles.statusTest}>{status}</FormHelperText>}
          <Field disabled={isLoading} placeholder="Электронная почта" as={Input} name="email" />
          <Field
            disabled={isLoading}
            placeholder="Пароль"
            type="password"
            as={Input}
            name="password"
          />
          <Controls isLoading={isLoading}>
            <Box className={styles.buttonsBox}>
              <Button className={styles.button} type="submit">
                Войти
              </Button>
              <Button className={styles.button} onClick={demoSingIn}>
                Войти в демо режим
              </Button>
              <Link
                href={routesPath.rootRoute + routesPath.registrationPage}
                className={styles.link}>
                Зарегистрироваться
              </Link>
            </Box>
          </Controls>
        </Form>
      )}
    </Formik>
  );
}

export default LoginPageComponent;
