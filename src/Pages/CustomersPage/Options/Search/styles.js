import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  input: {
    ...theme.input,
  },
  button: {
    ...theme.button,
    borderRadius: '50%',
  },
  selectMenu: {
    '& ul': {
      backgroundColor: theme.primary,
    },
  },
  select: {
    '&.MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: theme.primary,
        boxShadow: '0 0 5px #ccc',
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.primary,
      },
    },
  },
}));

export default styles;
