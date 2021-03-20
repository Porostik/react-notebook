import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  primary: '#b6be82',
  secondary: '#efdb9d',
  color: '#5d5843',
  errorColor: '#ff4747',
  root: {
    backgroundColor: '#b6be82',
    padding: '30px 0px',
    minHeight: '100vh',
  },
  button: {
    backgroundColor: '#b6be82',
    color: '#5d5843',
    textTransform: 'none',

    '&:hover': {
      color: '#efdb9d',
      backgroundColor: '#5d5843',
    },
  },
  input: {
    backgroundColor: '#b6be82',
    borderRadius: 5,
    '& .MuiOutlinedInput-root': {
      color: '#5d5843',
      '&.Mui-focused': {
        '& fieldset': {
          borderColor: '#b6be82',
          borderWidth: 3,
        },
      },
      '& fieldset': {
        borderColor: '#b6be82',
      },
    },
  },
  checkbox: {
    color: '#b6be82',
    '&.Mui-checked': {
      color: '#5d5843',
    },
  },
});

export default theme;
