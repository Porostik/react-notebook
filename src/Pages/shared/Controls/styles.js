import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  loader: {
    color: theme.color,
  },
  controls: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '150px',
  },
}));

export default styles;
