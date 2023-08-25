import React from 'react';

import { snsIcon } from 'components/pages/Home/Desktop/Footer/styles';
import { CDN_URL, CDN_URL_M } from 'constants/values';

import {
  container,
  divider1,
  image1,
  row,
  text1,
} from './styles';

const Footer = () => (
  <div style={container}>
    <div style={{ minHeight: 120 }} />
    <a href="https://fidelion.io" target="_blank">
      <img alt="fidelion" src={`${CDN_URL_M}/m-fidelion-logo_203x123.png`} style={image1} />
    </a>
    <div style={{ minHeight: 120 }} />
    <div style={row}>
      <a href="https://twitter.com/tidalflatstudio" target="_blank">
        <img alt="twitter" src={`${CDN_URL}/202303/twitter_32x32.png`} style={snsIcon} />
      </a>
      <div style={{ minWidth: 28 }} />
      <a href="https://discord.gg/ekkCRmEb" target="_blank">
        <img alt="discord" src={`${CDN_URL}/202303/discord_32x32.png`} style={snsIcon} />
      </a>
    </div>
    <div style={{ minHeight: 28 }} />
    <div style={text1}>© MetaZ all rights reserved</div>
    <div style={{ minHeight: 11 }} />
    {/* TODO Links */}
    <div style={row}>
      <a href="https://docs.google.com/document/d/12d3Zn6Vrk_mB70SaR-ucYZ5nu2g43IfVoBsj2dYs7VE" target="_blank">
        <div style={text1}>Terms & Conditions</div>
      </a>
      <div style={divider1} />
      <a href="https://docs.google.com/document/d/1tUrnX6xb-e-ilQIMm0XU6GBiHdsmSRKrQ78EuGPt7Yg" target="_blank">
        <div style={text1}>Privacy Policy</div>
      </a>
      <div style={divider1} />
      <a href="mailto: support@meta-z.io" style={text1}>Contact: support@meta-z.io</a>
    </div>
    <div style={{ minHeight: 24 }} />
  </div>
);

export default Footer;
