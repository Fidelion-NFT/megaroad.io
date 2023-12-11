import React from 'react';

import { CDN_URL } from 'constants/values';
import logoImage from "assets/logo.png";
import {megaLoad} from "../Menu/styles";

const FixedLeft = () => (
  <div
      className={'픽스드'}
    style={{
      cursor: 'pointer',
      left: 70,
      position: 'fixed',
      top: 184,
        zIndex: 1
    }}
  ><img alt="mega-load" src={logoImage} style={megaLoad} />
    <img
      alt="fixed-left"
      src={`${CDN_URL}/202303/fixed-left_108x201.png`}
      style={{
        height: 201,
        width: 108,
      }}
    />
  </div>
);

export default FixedLeft;
