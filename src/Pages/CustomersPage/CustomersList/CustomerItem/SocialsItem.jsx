import React from 'react';
import { Link } from '@material-ui/core';
import useStyles from './styles';

function SocialsItem({ icon: IconComponent, socialUrl }) {
  const styles = useStyles();

  return (
    <Link className={styles.socialLink} href={socialUrl}>
      <IconComponent />
    </Link>
  );
}

export default SocialsItem;
