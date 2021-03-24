import React from 'react';

import { WarningPopup } from 'Components';
import { popupTexts, customersTypes } from 'constants.js';
import { useDispatch, useSelector } from 'react-redux';

function DemoWarning() {
  const demoMode = useSelector(({ customers }) => customers.demo);
  const dispatch = useDispatch();

  const closePopup = () => {
    dispatch({ type: customersTypes.closeDemoPopup });
  };

  return (
    <WarningPopup
      text={popupTexts.demoPopup}
      isOpen={demoMode.isActive && demoMode.openDemoPopup}
      onClose={closePopup}
    />
  );
}

export default DemoWarning;
