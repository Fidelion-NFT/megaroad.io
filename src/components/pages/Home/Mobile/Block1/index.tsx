import React from 'react';

import { CDN_URL_M } from 'constants/values';
import DirectedBy from 'components/pages/Home/Desktop/DirectedBy';
import ImageList from 'components/pages/Home/Desktop/ImageList';
import { horizontalCenter } from 'styles/common';
import mainImage from 'assets/Mobile/Block1/m-block1-image1_491x576.png.png';
import appleAppStoreIcon from 'assets/apple.svg';
import googlePlayIcon from 'assets/google.svg';

import {
  aImage1,
  body,
  container,
  image1,
  image2,
} from './styles';
import {googleDownLoadImage} from "../../Desktop/Block1/styles";

const imageList = [
  { style: image1, url: mainImage },
  { style: image2, url: `${CDN_URL_M}/m-block1-image2_303x234.png` },
];

const Block1 = () => (
  <div style={container}>
    <div style={body}>
      <div style={{ minHeight: 10 }} />
      <ImageList imageList={[imageList[0]]} />
      <div style={{ minHeight: 22 }} />
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
        <div style={{...horizontalCenter, width: 320, display: 'flex', gap: 19}}>
            <img src={appleAppStoreIcon} style={{width: 148.5, height: 44}} onClick={()=>{
                window.open('https://apps.apple.com/us/app/mega-road-roguelike-arpg/id6464222073');
            }}/>
            <img src={googlePlayIcon} style={{width: 148.5, height: 44}} onClick={()=>{
                window.open('https://play.google.com/store/apps/details?id=studio.tidalflats.android.megaroad&pcampaignid=web_share');
            }}/>
        </div>
        <div style={{ minHeight: 50 }} />
      <img
        alt="a"
        src="/apng/oil barrel.png"
        style={{
          ...aImage1,
          ...horizontalCenter,
        }}
      />
      <div style={{ minHeight: 100 }} />
    </div>
  </div>
);

export default Block1;
