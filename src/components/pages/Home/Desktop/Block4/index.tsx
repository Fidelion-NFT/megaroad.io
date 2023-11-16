import React, { useRef } from "react";

import ApngImage from "components/atoms/ApngImage";
import { CDN_URL } from "constants/values";
import { ApngPlayer } from "constants/types";

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
} from "./styles";
import ImageList from "../ImageList";

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
            <span style={box1Text2}>It is 2069,</span> The land and climate are
            no longer on humanity's side, plagued
            <br />
            by overexploitation and endless warfare fueled by insatiable greed.
            <br />
            Mutants, monstrous creatures, and the mind-contaminated, driven mad
            by hunger, <br />
            have taken over. <br />
            But even here, based on a single flower, a single bee, a single leaf
            with the color of
            <br />
            life still on it.
            <br />
            There are young kids who dream of a world they've never seen, a
            utopia where life <br />
            still abounds.
            {/* <br /> Willi, the righteous and brave master of weapons.
            <br /> Jeffery, a genius scientist who creates a variety of weapons
            and machines, <br />
            Mobi, a tiny fixer with explosive weapons skills that belies his
            cute appearance. */}
            <br /> The trio continues to search for the MEGA ROAD, the road to
            their dream paradise
            <br /> on this seemingly doomed Earth.
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
