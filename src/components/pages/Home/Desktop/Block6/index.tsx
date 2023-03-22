import React from 'react';

import { CDN_URL } from 'constants/values';

import {
  body,
  container,
  image1,
  image2,
} from './styles';
import DirectedBy from '../DirectedBy';

const Block6 = () => (
  <div style={container}>
    <div style={body}>
      <img
        alt="block6"
        src={`${CDN_URL}/202303/block6-1_774x507.png`}
        style={image1}
      />
      <img
        alt="block6"
        src={`${CDN_URL}/202303/block6-2_420x324.png`}
        style={image2}
      />
      <DirectedBy
        gap={7}
        h1={17}
        h2={39}
        style={{
          left: 276,
          position: 'absolute',
          top: 440,
        }}
      />
    </div>
  </div>
);

export default Block6;
