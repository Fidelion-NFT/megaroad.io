import React from 'react';

import logoImage from 'assets/logo.png';

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
      <div style={{ minWidth: 140 }} />
      {/*{menuList.map(({ isActive, text1 }, idx) => (*/}
      {/*  <div*/}
      {/*    key={idx.toString()}*/}
      {/*    style={{*/}
      {/*      ...menuText,*/}
      {/*      ...isActive && { color: '#00E387' },*/}
      {/*      ...idx > 0 && { marginLeft: 55 },*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    {text1}*/}
      {/*  </div>*/}
      {/*))}*/}
    </div>
  </div>
);

export default Menu;
