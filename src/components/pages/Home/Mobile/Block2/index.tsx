import React from "react";

import ImageList from "components/pages/Home/Desktop/ImageList";
import { CDN_URL_M } from "constants/values";

import {
  aImageBoss01,
  aImageMon007,
  aImageMon011,
  animationLine1,
  body,
  container,
  image1,
  text1,
} from "./styles";

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
        Every morning our trio is busy. Willi and Mobi head out into the fierce
        monster-infested world to collect bolts to build more powerful weapons.
        {"\n"}
        {"\n"}
        Along the way, they must earn resources to build their moving fortress
        and reach the paradise of their dreams.{"\n"}
        {"\n"}
        Jeffery works tirelessly to create new weapons and protective devices.
        {"\n"}
        {"\n"}
        Can Willi and his friends survive the monsters and find the paradise of
        their dreams?
        {"\n"}
        {"\n"}
        Join Willi, Mobi, and Jeffery on their dream adventure.
      </div>
      <div style={{ minHeight: 26 }} />
      <div style={animationLine1}>
        {Array.from({ length: 3 }).map((_, idx) => (
          <img
            alt="mon007"
            key={idx.toString()}
            src="/apng/mon_007.png"
            style={aImageMon007}
          />
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
