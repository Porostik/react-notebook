import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  form: {
    padding: '20px 20px 35px 20px',
  },
  textarea: {
    backgroundColor: theme.primary,
    color: theme.color,
    resize: 'none',
    border: 'none',
    borderRadius: 5,
    padding: 20,
    width: '100%',
    minHeight: 150,
  },
  submitButton: {
    ...theme.button,
  },
  loaderRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60vh',
  },
  loader: {
    color: theme.primary,
  },
}));

export default styles;
