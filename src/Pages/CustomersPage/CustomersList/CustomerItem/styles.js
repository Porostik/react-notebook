import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.primary,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 5,
    marginBottom: '20px',
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
  },
  socialLink: {
    color: theme.color,
    marginLeft: 10,
  },
  socialsPlaceholder: {
    color: theme.color,
    textAlign: 'center',
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
  descriptionWrap: {
    width: '100%',
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
  deleteButton: {
    ...theme.button,
    alignSelf: 'flex-start',
    marginTop: 15,
    backgroundColor: '#ff0000',
    color: '#ffffff ',
  },
  buttonWrap: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default styles;
