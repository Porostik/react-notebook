import React from 'react';
import { animated, useSpring } from 'react-spring';

function ShowAnimation({ children }) {
  const style = useSpring({
    from: { position: 'absolute', top: '100%', left: 0 },
    to: { top: '0%' },
  });

  return <animated.div style={style}>{children}</animated.div>;
}

export default ShowAnimation;
