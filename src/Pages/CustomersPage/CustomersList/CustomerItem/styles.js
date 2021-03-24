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
    alignItems: 'center',
  },
  importantItem: {
    minWidth: 25,
  },
  socialsList: {
    width: '50%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginLeft: 30,
  },
  socialLink: {
    color: theme.color,
    marginLeft: 10,
  },
  socialsPlaceholder: {
    color: theme.color,
    textAlign: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    backgroundColor: theme.secondary,
    color: theme.color,
  },
  nameBlock: {
    width: 100,
    color: theme.color,
    marginLeft: 10,
  },
  nameItem: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
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
