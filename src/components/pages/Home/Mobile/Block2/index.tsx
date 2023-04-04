import React from 'react';

import ImageList from 'components/pages/Home/Desktop/ImageList';
import { CDN_URL_M } from 'constants/values';

import {
  aImageBoss01,
  aImageMon007,
  aImageMon011,
  animationLine1,
  body,
  container,
  image1,
  text1,
} from './styles';

const imageList = [
  { style: image1, url: `${CDN_URL_M}/m-block2-image1_319x146.png` },
];

const Block2 = () => (
  <div style={container}>
    <div style={body}>
      <div style={{ minHeight: 25 }} />
      <ImageList imageList={[imageList[0]]} />
      <div style={{ minHeight: 3 }} />
      <div style={text1}>MEGA ROAD...</div>
      <div style={text1}>
        aims to create a strong IP from a new
        standard for the development of multiple
        series of Fidelion. Compared to the
        traditional mobile game market, which
        one IP can be only used in one single
        game development, Mega Road has
        relatively higher potential to be expanded
        for numerous series of contents. This is
        the first development game of Project
        Fidelion, and it will be a long-term game
        development project.{'\n'}{'\n'}

        Mega Road will create a solid foundation
        for the entire project by organizing it in a
        specialized environment centered on
        blockchain and metaverse. This will lead
        the team to create a framework of the
        project and continuously releasing the
        outstanding games to increase the value
        of IP.{'\n'}{'\n'}

        The main focus of the project is to form
        Solana's NFT community, which
        corresponds to IP value, and to create a
        scalable profit structure by creating
        mobile games based on highly loyal fans.
      </div>
      <div style={{ minHeight: 26 }} />
      <div style={animationLine1}>
        {Array.from({ length: 3 }).map((_, idx) => (
          <img alt="mon007" key={idx.toString()} src="/apng/mon_007.png" style={aImageMon007} />
        ))}
      </div>
      <div style={{ minHeight: 9 }} />
      <img alt="boss01" src="/apng/boss-01.png" style={aImageBoss01} />
      <div style={{ minHeight: 97 }} />
      <img alt="mon011" src="/apng/mon_011_attck.png" style={aImageMon011} />
    </div>
  </div>
);

export default Block2;
