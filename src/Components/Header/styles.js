import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: 50,
    alignItems: 'center',
    minWidth: '15%',
    marginLeft: 40,
  },
  button: {
    ...theme.button,
    backgroundColor: theme.secondary,
    marginLeft: '30px',
    width: '100px',
    height: '100%',
  },
  userInfo: {
    color: theme.color,
  },
}));

export default styles;
