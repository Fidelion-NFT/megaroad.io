import React, { useRef } from 'react';

import ApngImage from 'components/atoms/ApngImage';
import { ApngPlayer } from 'constants/types';
import { CDN_URL } from 'constants/values';

import {
  aImage1,
  aPos1,
  aPos2,
  aPos3,
  aPos4,
  body,
  container,
  image21,
  image22,
  image23,
  image24,
} from './styles';

const imageList = [
  { style: image21, url: `${CDN_URL}/202303/block3-1_106x56.png` },
  { style: image22, url: `${CDN_URL}/202303/block3-2_169x150.png` },
  { style: image23, url: `${CDN_URL}/202303/block3-3_200x86.png` },
  { style: image24, url: `${CDN_URL}/202303/block3-4_199x71.png` },
];

const Block3 = () => {
  const ref1 = useRef<ApngPlayer>(null);
  const ref2 = useRef<ApngPlayer>(null);
  const ref3 = useRef<ApngPlayer>(null);
  const ref4 = useRef<ApngPlayer>(null);
  const isPlayRef = useRef(false);
  const refArray = [ref1, ref2, ref3, ref4];
  const play = () => {
    let index = 0;
    const handle = setInterval(() => {
      if (index < 4) {
        refArray[index].current?.play();
        index += 1;
      } else {
        clearInterval(handle);
        setTimeout(() => {
          refArray.forEach((ref) => {
            ref.current?.stop();
          });
          isPlayRef.current = false;
        }, 1500);
      }
    }, 250);
  };
  return (
    <div style={container}>
      <div style={body}>
        {imageList.map(({ style, url }, idx) => (
          <img
            alt="block3"
            key={url}
            onMouseEnter={() => {
              refArray[idx].current?.play();
            }}
            onMouseLeave={() => {
              refArray[idx].current?.stopAtEnd();
            }}
            src={url}
            style={style}
          />
        ))}
        <ApngImage
          ref={ref1}
          src="/apng/volcano-3.png"
          style={{
            ...aImage1,
            ...aPos1,
          }}
        />
        <ApngImage
          ref={ref2}
          src="/apng/volcano-3.png"
          style={{
            ...aImage1,
            ...aPos2,
          }}
        />
        <ApngImage
          ref={ref3}
          src="/apng/volcano-3.png"
          style={{
            ...aImage1,
            ...aPos3,
          }}
        />
        <ApngImage
          ref={ref4}
          src="/apng/volcano-3.png"
          style={{
            ...aImage1,
            ...aPos4,
          }}
        />
      </div>
    </div>
  );
};

export default Block3;
