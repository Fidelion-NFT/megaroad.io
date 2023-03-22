import React, { useRef } from 'react';

import ApngImage from 'components/atoms/ApngImage';
import { CDN_URL } from 'constants/values';
import { ApngPlayer } from 'constants/types';

import {
  aImage1,
  body,
  box1,
  box1Text1,
  box1Text2,
  container,
  image1,
  image2,
  image3,
} from './styles';
import ImageList from '../ImageList';

const imageList = [
  { style: image1, url: `${CDN_URL}/202303/block4-1_1007x698.png` },
  { style: image2, url: `${CDN_URL}/202303/block4-2_132_107.png` },
  { style: image3, url: `${CDN_URL}/202303/block4-3_65x55.png` },
];

const Block4 = () => {
  const ref1 = useRef<ApngPlayer>(null);
  return (
    <div style={container}>
      <div style={body}>
        <ImageList imageList={imageList} />
        <div style={box1}>
          <div style={box1Text1}>
            <span style={box1Text2}>It is 2069,</span>
            Will is on a journey to find his lost friend Elaine, accompanied by
            Mobi, a broken robot, and Jeffrey, a brilliant yet eccentric scientist. After Jeffrey saves Willi from the unforgiving desert, she senses the adventure and excitement that lie ahead and suggests that Willi bring her bolts from battles to create powerful weapons.
            Despite being confined to a wheelchair, Jeffrey's love for creating explosive gadgets keeps her alive and even brings Mobi back to life. However, their journey is fraught with danger, as nuclear bombs have unleashed terrifying mutants onto the streets.
            Willi and his companions must fight through obstacles and adversaries to reunite with Elaine, pushing themselves to the brink of exhaustion. Will they be able to survive this chaos and find Elaine? Follow their adventure to find out!
          </div>
        </div>
        <ApngImage
          onMouseEnter={() => {
            ref1.current?.play();
          }}
          onMouseLeave={() => {
            ref1.current?.stopAtEnd();
          }}
          ref={ref1}
          src="/apng/eat_meat.png"
          style={aImage1}
        />
      </div>
    </div>
  );
};

export default Block4;
