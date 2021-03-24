import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
  },
  loader: {
    color: theme.primary,
  },
}));

export default styles;
