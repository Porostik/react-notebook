import React from 'react';
import { Box, Button, Popper, Typography } from '@material-ui/core';

import useStyles from './styles';
import ShowAnimation from './ShowAnimation';

function GuestWarningPopup({ text, onClose, isOpen }) {
  const rootRef = React.useRef(null);
  const [isActive, setIsActive] = React.useState(false);
  const styles = useStyles();

  React.useEffect(() => {
    setIsActive(Boolean(rootRef && isOpen));
  }, [rootRef, isOpen]);

  return (
    <Box className={styles.root} ref={rootRef}>
      <Popper open={isActive} anchorEl={rootRef.current} transition>
        <Box className={styles.wrapper}>
          <ShowAnimation>
            <Box className={styles.popup}>
              <Typography className={styles.text}>{text}</Typography>
              <Button className={styles.button} onClick={onClose}>
                Ok
              </Button>
            </Box>
          </ShowAnimation>
        </Box>
      </Popper>
    </Box>
  );
}

export default GuestWarningPopup;
