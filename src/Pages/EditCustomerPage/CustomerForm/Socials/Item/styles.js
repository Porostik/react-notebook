import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
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
  socialIcon: {
    color: theme.color,
  },
  input: {
    ...theme.input,
    flexGrow: 0.7,
    borderRadius: 5,
  },
}));

export default styles;
