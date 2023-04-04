import React from 'react';

import { CDN_URL_M } from 'constants/values';

import {
  body,
  botDee,
  container,
} from './styles';

const Block10 = () => (
  <div style={container}>
    <div style={botDee} />
    <div style={body}>
      <img
        alt="mobile"
        src={`${CDN_URL_M}/10-2.png`}
        style={{
          display: 'flex',
          verticalAlign: 'center',
          width: '100%',
        }}
      />
    </div>
  </div>
);

export default Block10;
