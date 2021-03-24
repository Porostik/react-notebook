import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
    minWidth: 750,
    minHeight: 55,
  },
  root: {
    position: 'fixed',
    left: '50%',
    bottom: 10,
  },
  popup: {
    minWidth: 750,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    borderRadius: 10,
    backgroundColor: '#969c6b',
  },
  text: {
    color: theme.color,
  },
  button: { ...theme.button, backgroundColor: theme.secondary },
}));

export default styles;
