import React from 'react';

import { CDN_URL } from 'constants/values';

import {
  body,
  container,
  image1,
  image2,
  image3,
} from './styles';

const Block6 = () => (
  <div style={container}>
    <div style={body}>
      <img
        alt="block9"
        src={`${CDN_URL}/202303/block9-1_376x318.png`}
        style={image1}
      />
      <img
        alt="block9"
        src="/apng/mon-002.png"
        style={image2}
      />
      <img
        alt="block9"
        src="/apng/mon-001.png"
        style={image3}
      />
    </div>
  </div>
);

export default Block6;
