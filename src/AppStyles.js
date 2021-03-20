import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  root: theme.root,
  main: {
    backgroundColor: theme.secondary,
    marginTop: 40,
    borderRadius: 5,
    padding: 20,
  },
}));

export default styles;
