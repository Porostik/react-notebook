import { Facebook, LinkedIn, Instagram, Twitter, Language } from '@material-ui/icons';

export const customersTypes = {
  openGusetWarning: 'OPEN_GUEST_WARNING',
  closeGusetWarning: 'CLOSE_GUEST_WARNING',
  custmersLoadingStart: 'LOADING_START',
  custmersLoadingError: 'LOADING_ERROR',
  custmersLoadingSuccess: 'LOADING_SUCCESS',
  addCustomer: 'ADD_CUSTOMER',
  updateCustomer: 'UPDATE_CUSTOMER',
  deleteCustomer: 'DELETE_CUSTOMER',
  setInitialState: 'SET_INITIAL_STATE',
  setDemo: 'SET_DEMO',
  closeDemoPopup: 'CLOSE_DEMO_POPUP',
};

export const optionTypes = {
  setNameFilter: 'SET_NAME_FILTER',
  setParamiter: 'SET_PARAMITER',
};

export const editCustomerTypes = {
  setEditCustomer: 'SET_EDIT_CUSTOMER',
  startLoading: 'START_LOADING',
  setError: 'SET_ERROR',
};

export const authTypes = {
  startFetching: 'START_FETCHING',
  errorFetching: 'ERROR_FETCHING',
  successFetching: 'SUCCESS_FETCHING',
};

export const demoModeTypes = {
  turnDemoMode: 'TURN_DEMO_MODE',
  openDemoPopup: 'OPEN_DEMO_POPUP',
  closeDemoPopup: 'CLOSE_DEMO_POPUP',
  disableDemoMode: 'DISABLE_DEMO_MODE',
};

export const routesPath = {
  customersPage: '/',
  loginPage: '/login',
  registrationPage: '/registration',
  editCustomerPage: '/editCustomerPage',
  addCustomerPage: '/addCustomer',
  errorPage: '/errorPage',
};

export const socilas = {
  facebook: Facebook,
  linkedIn: LinkedIn,
  instagram: Instagram,
  twitter: Twitter,
  unselected: Language,
};

export const socialsArr = [
  { name: 'facebook', component: Facebook },
  { name: 'twitter', component: Twitter },
  { name: 'instagram', component: Instagram },
  { name: 'unselected', component: Language },
];

export const getDefaultCustomer = () => ({
  uid: Date.now(),
  fullName: {
    firstname: '',
    surname: '',
    lastname: '',
  },
  isImportant: false,
  description: '',
  socials: [],
});

export const maxSocialsCount = 5;

export const filterValues = [
  { replay: 'Имя', value: 'firstname' },
  { replay: 'Фамилия', value: 'surname' },
  { replay: 'Отчество', value: 'lastname' },
];

export const paramitersNames = {
  importantFirst: 'Сначала важные',
};

export const popupTexts = {
  demoPopup: 'Демо режим. Внесённые вами изменения не будут сохранены',
};
