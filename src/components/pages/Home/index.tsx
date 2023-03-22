import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Desktop from './Desktop';
import Mobile from './Mobile';

const Home = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)'
  });
  if (!isDesktopOrLaptop) {
    return <Mobile />;
  }
  return <Desktop />;
};

export default Home;
