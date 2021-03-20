import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  rootControl: {
    minHeight: 100,
    flexGrow: 0.6,
  },
  input: {
    backgroundColor: theme.primary,
    '& .MuiOutlinedInput-root': {
      color: theme.color,
      '&.Mui-focused': {
        '& fieldset': {
          borderColor: theme.primary,
          borderWidth: 3,
        },
      },
      '& fieldset': {
        borderColor: theme.prymary,
      },
    },
  },
  error: {
    color: theme.errorColor,
    fontSize: 15,
    letterSpacing: 1,
  },
}));

export default styles;
