import React from 'react';

import { CDN_URL_M } from 'constants/values';

import {
  body,
  container,
  topDee,
} from './styles';

const Block8 = () => (
  <div style={container}>
    <div style={topDee} />
    <div style={body}>
      <img
        alt="mobile"
        src={`${CDN_URL_M}/8-2.png`}
        style={{
          display: 'flex',
          verticalAlign: 'center',
          width: '100%',
        }}
      />
    </div>
  </div>
);

export default Block8;
