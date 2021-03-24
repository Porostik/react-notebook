import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  loginPageRoot: {
    minHeight: '430px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: theme.color,
    marginBottom: 20,
  },
  link: {
    color: theme.color,
    fontSize: 18,
    textDecoration: 'none',
    cursor: 'pointer',
    marginTop: 30,
  },
  button: {
    ...theme.button,
    minWidth: 140,
  },
}));

export default styles;
