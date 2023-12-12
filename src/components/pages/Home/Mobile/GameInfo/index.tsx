import React from 'react';

import game1 from 'assets/Mobile/GameInfo/game1.png';
import game2 from 'assets/Mobile/GameInfo/game2.png';

import {
  body1,
    body2,
  container,
} from './styles';
import {horizontalCenter} from "styles/common";
const Block1 = () => (
  <div style={container}>
    <div style={body1}>
        <img src={game1} style={{width: 360, ...horizontalCenter}} alt={''}/>
    </div>
      <div style={body2}>
          <img src={game2} style={{width: 360, ...horizontalCenter}} alt={''}/>
      </div>
  </div>
);

export default Block1;
