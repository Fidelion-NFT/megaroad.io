import React, { useRef } from 'react';

import ApngImage from 'components/atoms/ApngImage';
import { ApngPlayer } from 'constants/types';
import { CDN_URL } from 'constants/values';

import DirectedBy from '../DirectedBy';
import {
  aImage1,
  aImage2,
  body,
  container,
  image1,
  image2,
} from './styles';

const Block1 = () => {
  const ref1 = useRef<ApngPlayer>(null);
  const ref2 = useRef<ApngPlayer>(null);
  return (
    <div style={container}>
      <div style={body}>
        <img
          alt="block1"
          src={`${CDN_URL}/202303/block1/block1-1_441x330.png`}
          style={image1}
        />
        <img
          alt="block1"
          src={`${CDN_URL}/202303/block1/block1-2_491x576.png`}
          style={image2}
        />
        <DirectedBy
          gap={4}
          style={{
            position: 'absolute',
            right: 677,
            top: 445,
          }}
        />
        <ApngImage
          alt="block1"
          onMouseEnter={() => {
            ref1.current?.play();
          }}
          onMouseLeave={() => {
            ref1.current?.stopAtEnd();
          }}
          ref={ref1}
          src="/apng/oil barrel.png"
          style={aImage1}
        />
        <ApngImage
          alt="block1"
          onMouseEnter={() => {
            ref2.current?.play();
          }}
          onMouseLeave={() => {
            ref2.current?.stopAtEnd();
          }}
          ref={ref2}
          src="/apng/coin.png"
          style={aImage2}
        />
      </div>
    </div>

  );
};

export default Block1;
