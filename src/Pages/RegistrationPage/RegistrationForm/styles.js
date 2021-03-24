import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '50%',
    height: '60%',
  },
  button: {
    ...theme.button,
    width: '60%',
    margin: '0 auto',
  },
  buttonsBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 80,
  },
  link: {
    color: theme.color,
    fontSize: 18,
    textDecoration: 'none',
    cursor: 'pointer',
  },
}));

export default styles;
