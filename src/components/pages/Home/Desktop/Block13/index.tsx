import React from 'react';

import { CDN_URL } from 'constants/values';

import ImageList from '../ImageList';
import {
  body,
  container,
  image1,
  image2,
} from './styles';

const imageList = [
  { style: image1, url: `${CDN_URL}/202303/block13-1_425x245.png` },
  { style: image2, url: `${CDN_URL}/202303/block13-2_880x270.png` },
];


const Block13 = () => (
  <div style={container}>
    <div style={body}>
      <ImageList imageList={imageList} />
    </div>
  </div>
);

export default Block13;
