import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.primary,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 5,
  },
  mainInfo: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  importantItem: {
    minWidth: 25,
  },
  socialsList: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 0.5,
    padding: '0px 30px',
  },
  socialLink: {
    color: theme.color,
    marginLeft: 20,
  },
  avatarIcon: {
    flexGrow: 0.1,
  },
  avatar: {
    width: 60,
    height: 60,
    backgroundColor: theme.secondary,
    color: theme.color,
  },
  nameBlock: {
    flexGrow: 0.2,
    color: theme.color,
  },
  descriptionBlock: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
  },
  description: {
    backgroundColor: theme.secondary,
    padding: '10px 20px',
    color: theme.color,
    borderRadius: 5,
    minHeight: '150px',
  },
  descriptionButton: {
    ...theme.button,
    alignSelf: 'flex-end',
    marginTop: 15,
    backgroundColor: theme.secondary,
  },
}));

export default styles;
