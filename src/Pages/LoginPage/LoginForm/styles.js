import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '50%',
    height: '60%',
  },
  statusTest: {
    color: theme.errorColor,
    textAlign: 'center',
  },
  button: {
    ...theme.button,
    width: '60%',
    margin: '0 auto',
  },
}));

export default styles;
