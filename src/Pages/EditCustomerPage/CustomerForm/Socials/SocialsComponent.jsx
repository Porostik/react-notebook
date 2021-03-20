import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import { FieldArray } from 'formik';

import SocialItem from './Item';
import useStyles from './styles';
import { maxSocialsCount } from 'constants.js';

function SocialsComponent({ socials }) {
  const styles = useStyles();

  return (
    <FieldArray
      name="socials"
      render={(helpers) => (
        <Grid className={styles.root} container item spacing={3} justify="center">
          {socials.length > 0 ? (
            socials.map((item, index) => (
              <SocialItem
                key={index}
                socialName={`socials.${index}.name`}
                urlName={`socials.${index}.url`}
                onDelete={() => helpers.remove(index)}
              />
            ))
          ) : (
            <Grid item container justify="center" xs={12}>
              <Typography className={styles.socialsPlaceholder} variant="body1" component="p">
                Вы не добавили соцальных сетей для данного клиента
              </Typography>
            </Grid>
          )}
          <Grid item>
            <Button
              className={styles.button}
              disabled={socials.length >= maxSocialsCount}
              onClick={() => helpers.insert(socials.length + 1, { name: 'unselected', url: '' })}>
              Добавить
            </Button>
          </Grid>
        </Grid>
      )}
    />
  );
}

export default SocialsComponent;
