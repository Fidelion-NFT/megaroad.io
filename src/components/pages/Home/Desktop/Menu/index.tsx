import React from 'react';

import { CDN_URL } from 'constants/values';

import FixedLeft from '../FixedLeft';
import {
  body,
  container,
  megaLoad,
  menuText,
} from './styles';

const menuList = [
  { isActive: true, text1: 'About Game' },
  { text1: '$2080\nComing Soon' },
  { text1: 'Marketplace\nComing Soon' },
  { text1: 'Governance\nComing Soon' },
  { text1: 'W’s Mansion\nComing Soon' },
];

const Menu = () => (
  <div style={container}>
    <div style={body}>
      <FixedLeft />
      <img alt="mega-load" src={`${CDN_URL}/202303/megaload_128x108.png`} style={megaLoad} />
      <div style={{ minWidth: 140 }} />
      {menuList.map(({ isActive, text1 }, idx) => (
        <div
          key={idx.toString()}
          style={{
            ...menuText,
            ...isActive && { color: '#00E387' },
            ...idx > 0 && { marginLeft: 55 },
          }}
        >
          {text1}
        </div>
      ))}
    </div>
  </div>
);

export default Menu;
