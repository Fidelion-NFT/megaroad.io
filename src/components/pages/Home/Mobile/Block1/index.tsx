import React from 'react';

import { CDN_URL_M } from 'constants/values';
import DirectedBy from 'components/pages/Home/Desktop/DirectedBy';
import ImageList from 'components/pages/Home/Desktop/ImageList';
import { horizontalCenter } from 'styles/common';

import {
  aImage1,
  body,
  container,
  image1,
  image2,
} from './styles';

const imageList = [
  { style: image1, url: `${CDN_URL_M}/m-block1-image1_491x576.png` },
  { style: image2, url: `${CDN_URL_M}/m-block1-image2_303x234.png` },
];

const Block1 = () => (
  <div style={container}>
    <div style={body}>
      <div style={{ minHeight: 10 }} />
      <ImageList imageList={[imageList[0]]} />
      <div style={{ minHeight: 52 }} />
      <ImageList imageList={[imageList[1]]} />
      <DirectedBy
        h1={15}
        h2={34}
        gap={3}
        style={{
          ...horizontalCenter,
          width: 290,
        }}
      />
      <div style={{ minHeight: 29 }} />
      <img
        alt="a"
        src="/apng/oil barrel.png"
        style={{
          ...aImage1,
          ...horizontalCenter,
        }}
      />
      <div style={{ minHeight: 46 }} />
    </div>
  </div>
);

export default Block1;
