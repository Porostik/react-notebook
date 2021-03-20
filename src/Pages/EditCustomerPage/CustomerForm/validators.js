import * as Yup from 'yup';

const customerFormValidator = Yup.object().shape({
  fullName: Yup.object().shape({
    firstname: Yup.string().required('Обязательное поле'),
    surname: Yup.string().required('Обязательное поле'),
    lastname: Yup.string().required('Обязательное поле'),
  }),
  socials: Yup.array().of(
    Yup.object().shape({
      url: Yup.string().required('Введите ссылку на социальную сеть'),
    }),
  ),
});

export default customerFormValidator;
