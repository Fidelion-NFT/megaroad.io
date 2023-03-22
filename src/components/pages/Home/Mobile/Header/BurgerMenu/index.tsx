import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import { menuText, titleText } from './styles';

const BurgerMenu = () => (
  <Menu
    width={270}
  >
    <div style={titleText}>Menu</div>
    <div style={{ minHeight: 36 }} />
    <div style={{ ...menuText, color: '#00E387' }}>About Game</div>
    <div style={menuText}>$2080</div>
    <div style={menuText}>Marketplace</div>
    <div style={menuText}>Governance</div>
    <div style={menuText}>W’s Mansion</div>
  </Menu>
);

export default BurgerMenu;
