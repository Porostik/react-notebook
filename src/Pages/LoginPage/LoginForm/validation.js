import * as Yup from 'yup';

const loginFormValidator = Yup.object().shape({
  email: Yup.string()
    .email('Введите правильный формат почты')
    .required('Введите адрес электронной почты'),
  password: Yup.string().required('Введите пароль'),
});

export default loginFormValidator;
