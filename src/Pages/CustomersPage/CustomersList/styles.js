const { makeStyles } = require('@material-ui/core');

const styles = makeStyles((theme) => ({
  paceholderBox: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paceholderText: {
    color: theme.color,
    fontSize: 20,
    margin: '0 auto',
  },
  loader: {
    color: theme.color,
    margin: '20px auto',
    display: 'block',
  },
}));

export default styles;
