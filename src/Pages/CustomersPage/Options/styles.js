import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  root: {
    padding: '20px',
  },
  button: { ...theme.button, margin: '0 auto' },
}));

export default styles;
