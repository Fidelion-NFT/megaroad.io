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
  { style: image1, url: `${CDN_URL}/202303/block12-1_792x216.png` },
  { style: image2, url: `${CDN_URL}/202303/block12-2_403x553.png` },
  { style: image3, url: `${CDN_URL}/202303/block12-3_81x60.png` },
];

const Block12 = () => (
  <div style={container}>
    <div style={body}>
      <ImageList imageList={imageList} />
      <DirectedBy
        gap={2}
        h1={17}
        h2={42}
        style={{
          left: 268,
          position: 'absolute',
          top: 423,
        }}
      />
    </div>
  </div>
);

export default Block12;
