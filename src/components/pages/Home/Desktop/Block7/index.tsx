import React from 'react';

import { CDN_URL } from 'constants/values';

import ImageList from '../ImageList';
import {
  aImage1,
  aImage2,
  body,
  container,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  text1,
  text2,
} from './styles';

const imageList = [
  { style: image1, url: `${CDN_URL}/202303/block7-1_655x222.png` },
  { style: image2, url: `${CDN_URL}/202303/block7-2_100x104.png` },
  { style: image3, url: `${CDN_URL}/202303/block7-3_114x105.png` },
  { style: image4, url: `${CDN_URL}/202303/block7-4_70x68.png` },
  { style: image5, url: `${CDN_URL}/202303/block7-5_231x68.png` },
  { style: image6, url: `${CDN_URL}/202303/block7-6_382x389.png` },
  { style: image7, url: `${CDN_URL}/202303/block7-7_392x503.png` },
  { style: image8, url: `${CDN_URL}/202303/block7-8_132x107.png` },
  { style: aImage1, url: `/apng/mobispark.png` },
  { style: aImage2, url: `/apng/birdeye.png` },
];

const Block7 = () => (
  <div style={container}>
    <div style={body}>
      <ImageList imageList={imageList} />
      <div style={text1}>
        Willi is ...{'\n'}
        A brave warrior and man of action who{'\n'}
        communicates without words. He has finally{'\n'}
        achieved freedom after escaping from forced labor{'\n'}
        and is now on his way to find his friend, Elaine.
      </div>
      <div style={text2}>
        Mobi is ...{'\n'}
        an Al-powered timid, old robot whom Willi{'\n'}
        rescues from a group of big gangsters. After{'\n'}
        gaining the ability to speak thanks to Jeffery,{'\n'}
        Mobi becomes a loyal companion to Willi.
      </div>
    </div>
  </div>
);

export default Block7;
