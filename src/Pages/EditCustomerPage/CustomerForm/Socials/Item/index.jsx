import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Field } from 'formik';

import SocialsSelect from './SocialsSelect';
import useStyles from './styles';
import SocialInput from './SocialInput';

function SocialItem({ socialName, urlName, onDelete }) {
  const styles = useStyles();

  return (
    <Grid item container justify="space-between" alignItems="center">
      <Field name={socialName} as={SocialsSelect} />
      <Field name={urlName} className={styles.input} variant="outlined" as={SocialInput} />
      <IconButton onClick={onDelete}>
        <DeleteIcon />
      </IconButton>
    </Grid>
  );
}

export default SocialItem;
