import React from 'react';
import { Box, Button, Popper, Typography } from '@material-ui/core';

import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import ShowAnimation from './ShowAnimation';
import { customersTypes } from 'constants.js';

function GuestWarningPopup() {
  const rootRef = React.useRef(null);
  const isOpen = useSelector((state) => state.customers.guestWarning.active);
  const [isActive, setIsActive] = React.useState(false);
  const styles = useStyles();
  const dispatch = useDispatch();

  const closePopup = () => {
    dispatch({ type: customersTypes.closeGusetWarning });
  };

  React.useEffect(() => {
    setIsActive(Boolean(rootRef && isOpen));
  }, [rootRef, isOpen]);

  return (
    isOpen && (
      <Box className={styles.root} ref={rootRef}>
        <Popper open={isActive} anchorEl={rootRef.current} transition>
          <Box className={styles.wrapper}>
            <ShowAnimation>
              <Box className={styles.popup}>
                <Typography className={styles.text}>
                  Вы совершили вход как гость! Введённые вами данные не будут сохранены
                </Typography>
                <Button className={styles.button} onClick={closePopup}>
                  Ok
                </Button>
              </Box>
            </ShowAnimation>
          </Box>
        </Popper>
      </Box>
    )
  );
}

export default GuestWarningPopup;
