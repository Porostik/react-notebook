import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  text: {
    color: theme.color,
    margin: '15% 0 20px 0',
  },
  button: {
    ...theme.button,
  },
}));

export default styles;
