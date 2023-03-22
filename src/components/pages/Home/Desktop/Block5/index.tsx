import React from 'react';

import { CDN_URL } from 'constants/values';

import {
  body,
  container,
  image1,
  image2,
} from './styles';
import DirectedBy from '../DirectedBy';

const Block5 = () => (
  <div style={container}>
    <div style={body}>
      <img
        alt="block5"
        src={`${CDN_URL}/202303/block5-1_643x590.png`}
        style={image1}
      />
      <img
        alt="block5"
        src={`${CDN_URL}/202303/block5-2_420x324.png`}
        style={image2}
      />
      <DirectedBy
        gap={7}
        h1={17}
        h2={39}
        style={{
          left: 848,
          position: 'absolute',
          top: 450,
        }}
      />
    </div>
  </div>
);

export default Block5;
