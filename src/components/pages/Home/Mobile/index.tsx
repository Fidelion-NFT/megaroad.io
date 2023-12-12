import React from "react";

import { CDN_URL_M } from "constants/values";

import Block1 from "./Block1";
import Block2 from "./Block2";
import Block3 from "./Block3";
import Block4 from "./Block4";
import Block6 from "./Block6";
import Block8 from "./Block8";
import Block10 from "./Block10";
import Footer from "./Footer";
import Header from "./Header";
import ImageBlock from "./ImageBlock";
import SoundButton from "./SoundButton";
import GameInfo from "./GameInfo";
import InvestorImage from 'assets/Mobile/14.png';
import Block9 from 'assets/Mobile/Block9/12.png';

const MobileHome = () => (
  <div style={{ overflow: "hidden" }}>
    <SoundButton />
    <Header />
    <Block1 />
      <GameInfo/>
    <Block2 />
    <Block3 />
    <Block4 />
    <Block6 />
    <ImageBlock backgroundColor="#BE63FF" url={`${CDN_URL_M}/7-3.png`} />
    <Block8 />
    <ImageBlock backgroundColor="#fff" url={Block9} />
    <Block10 />
    <ImageBlock backgroundColor="#FFDF00" url={`${CDN_URL_M}/11-2.png`} />
    <ImageBlock backgroundColor="#ABECE4" url={`${CDN_URL_M}/12-2.png`} />
    <ImageBlock backgroundColor="#D5D5D5" url={`${CDN_URL_M}/13-2.png`} />
    <ImageBlock backgroundColor="#FFC52E" url={InvestorImage} />
    <ImageBlock backgroundColor="#01D6FE" url={`${CDN_URL_M}/15-3.png`} />
    <Footer />
  </div>
);

export default MobileHome;
