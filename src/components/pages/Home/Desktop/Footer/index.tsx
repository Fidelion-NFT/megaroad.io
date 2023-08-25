import React from 'react';

import { CDN_URL } from 'constants/values';

import {
  bottomLine,
  bottomLineBox1,
  bottomLineBox1Text1,
  bottomLineBox2,
  container,
  divider1,
  image1,
  snsIcon,
} from './styles';

const box1List = [
  { text: '© Meta Z all rights reserved' },
  { text: 'Terms & Conditions' },
  { text: 'Privacy Policy' },
  { text: '© Meta Z all rights reserved' },
];

const Footer = () => (
  <div style={container}>
    <div style={{ minHeight: 200 }} />
    <a href="https://fidelion.io" target="_blank">
      <img alt="fidelion" src={`${CDN_URL}/202303/fidelion-logo_366x96.png`} style={image1} />
    </a>
    <div style={{ minHeight: 194 }} />
    <div style={bottomLine}>
      <div style={bottomLineBox1}>
        <div style={bottomLineBox1Text1}>© Meta Z all rights reserved</div>
        <div style={divider1} />
        <a href="https://docs.google.com/document/d/12d3Zn6Vrk_mB70SaR-ucYZ5nu2g43IfVoBsj2dYs7VE" target="_blank">
          <div style={bottomLineBox1Text1}>Terms & Conditions</div>
        </a>
        <div style={divider1} />
        <a href="https://docs.google.com/document/d/1tUrnX6xb-e-ilQIMm0XU6GBiHdsmSRKrQ78EuGPt7Yg" target="_blank">
          <div style={bottomLineBox1Text1}>Privacy Policy</div>
        </a>
        <div style={divider1} />
        <a href="mailto: support@meta-z.io" style={bottomLineBox1Text1}>Contact: support@meta-z.io</a>
      </div>
      <div style={bottomLineBox2}>
        <a href="https://twitter.com/tidalflatstudio" target="_blank">
          <img alt="twitter" src={`${CDN_URL}/202303/twitter_32x32.png`} style={snsIcon} />
        </a>
        <div style={{ minWidth: 28 }} />
        <a href="https://discord.gg/tidalflats" target="_blank">
          <img alt="discord" src={`${CDN_URL}/202303/discord_32x32.png`} style={snsIcon} />
        </a>
      </div>
    </div>
    <div style={{ minHeight: 52 }} />
  </div>
);

export default Footer;
