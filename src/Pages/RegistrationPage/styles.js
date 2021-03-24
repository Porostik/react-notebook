import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  loginPageRoot: {
    minHeight: '480px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: theme.color,
    marginBottom: 30,
  },
  link: {
    color: theme.color,
    fontSize: 18,
    textDecoration: 'none',
    cursor: 'pointer',
  },
  button: {
    ...theme.button,
  },
}));

export default styles;
