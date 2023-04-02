import React from 'react';

import ImageList from 'components/pages/Home/Desktop/ImageList';
import { CDN_URL_M } from 'constants/values';

import {
  aImage1,
  body,
  container,
  image1,
} from './styles';

const imageList = [
  { style: image1, url: `${CDN_URL_M}/m-block3-image1_288x150.png`},
];

const Block3 = () => (
  <div style={container}>
    <div style={body}>
      <ImageList imageList={imageList} />
      <img alt="volcano" src="/apng/volcano.png" style={aImage1} />
    </div>
  </div>
);

export default Block3;
