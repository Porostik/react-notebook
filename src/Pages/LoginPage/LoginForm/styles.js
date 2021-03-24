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
  link: {
    color: theme.color,
    fontSize: 18,
    textDecoration: 'none',
    cursor: 'pointer',
  },
  buttonsBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 150,
  },
}));

export default styles;
