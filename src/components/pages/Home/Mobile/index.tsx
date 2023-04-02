import React from 'react';

import { CDN_URL_M } from 'constants/values';

import Block1 from './Block1';
import Block2 from './Block2';
import Block3 from './Block3';
import Footer from './Footer';
import Header from './Header';
import ImageBlock from './ImageBlock';

const MobileHome = () => (
  <div style={{ overflow: 'hidden' }}>
    <Header />
    <Block1 />
    <Block2 />
    <Block3 />
    <ImageBlock backgroundColor="#BE63FF" url={`${CDN_URL_M}/7-2.png`} />
    <ImageBlock backgroundColor="#B4FF00" url={`${CDN_URL_M}/8-2.png`} />
    <ImageBlock backgroundColor="#fff" url={`${CDN_URL_M}/9-2.png`} />
    <ImageBlock backgroundColor="#FB3B48" url={`${CDN_URL_M}/10-2.png`} />
    <ImageBlock backgroundColor="#FFDF00" url={`${CDN_URL_M}/11-2.png`} />
    <ImageBlock backgroundColor="#ABECE4" url={`${CDN_URL_M}/12-2.png`} />
    <ImageBlock backgroundColor="#D5D5D5" url={`${CDN_URL_M}/13-2.png`} />
    <ImageBlock backgroundColor="#FFC52E" url={`${CDN_URL_M}/14-2.png`} />
    <Footer />
  </div>
);

export default MobileHome;
