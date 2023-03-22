import React from 'react';

import { CDN_URL } from 'constants/values';

import DirectedBy from '../DirectedBy';
import ImageList from '../ImageList';
import {
  body,
  container,
  image1,
  image2,
  image3,
} from './styles';

const imageList = [
  { style: image1, url: `${CDN_URL}/202303/block11-1_420x324.png` },
  { style: image2, url: `${CDN_URL}/202303/block11-2_510x554.png` },
  { style: image3, url: `${CDN_URL}/202303/block11-3_100x84.png` },
];

const Block11 = () => (
  <div style={container}>
    <div style={body}>
      <ImageList imageList={imageList} />
      <DirectedBy
        gap={2}
        h1={17}
        h2={42}
        style={{
          left: 312,
          position: 'absolute',
          top: 468,
        }}
      />
    </div>
  </div>
);

export default Block11;
