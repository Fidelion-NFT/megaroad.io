import React from 'react';

import { CDN_URL } from 'constants/values';

// import BurgerMenu from './BurgerMenu';
import {
  container,
  image1,
  // image2,
  fixedLeft1,
} from './styles';

const Header = () => (
  <div style={container}>
    {/* <BurgerMenu /> */}
    <div style={{ minWidth: 1 }} />
    <img alt="logo" src={`${CDN_URL}/202303/mobile/m-megaroad-logo_48x34.png`} style={image1} />
    {/* <img alt="wallet" src={`${CDN_URL}/202303/mobile/m-wallet_28x25.png`} style={image2} /> */}
    <div style={{ minWidth: 1 }} />
    <img alt="fixed-left" src={`${CDN_URL}/202303/mobile/m-fixed-left_66x123.png`} style={fixedLeft1} />
  </div>
);

export default Header;
