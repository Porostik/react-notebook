import * as Yup from 'yup';

const registrationFormValidator = Yup.object().shape({
  email: Yup.string()
    .email('Введите правильный формат почты')
    .required('Введите адрес электронной почты'),
  password: Yup.string().required('Введите пароль').min(8, 'Минимальная длинна пароля: 8 символов'),
  repeatedPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
    .required('Введите пароль'),
});

export default registrationFormValidator;
