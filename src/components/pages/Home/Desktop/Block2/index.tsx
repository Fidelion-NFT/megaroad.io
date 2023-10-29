import React, { CSSProperties } from "react";

import ApngImage from "components/atoms/ApngImage";
import { CDN_URL } from "constants/values";

import ImageList from "../ImageList";
import {
  aImage1,
  aImage1Box1,
  aImage1Box2,
  aImage1Box3,
  aImage1Box4,
  aImage1Horizontal,
  aImage1Vertical,
  aImage2,
  aImage3,
  aImage4,
  aImage5,
  aImage6,
  aImage7,
  aImage8,
  aImage9,
  aImage10,
  aImage11,
  aImage12,
  body,
  box1,
  box1Text1,
  box1Text2,
  container,
  image1,
} from "./styles";

/*
<ApngImage autoPlay src="/apng/boss-01.png" style={aImage3} />
        <ApngImage autoPlay src="/apng/mon_011_attck.png" style={aImage4} />
        <ApngImage autoPlay src="/apng/mon-006.png" style={aImage5} />
        <ApngImage autoPlay src="/apng/mon_003.png" style={aImage6} />
        <ApngImage autoPlay src="/apng/mon-005.png" style={aImage7} />
        <ApngImage autoPlay src="/apng/mon_008.png" style={aImage8} />
        <ApngImage autoPlay src="/apng/mon-004.png" style={aImage9} />
        <ApngImage autoPlay src="/apng/mon_009.png" style={aImage10} />
 */
const imageList = [
  { style: aImage3, url: "/apng/boss-01.png" },
  { style: aImage4, url: "/apng/mon_011_attck.png" },
  { style: aImage5, url: "/apng/mon-006.png" },
  { style: aImage6, url: "/apng/mon_003.png" },
  { style: aImage7, url: "/apng/mon-005.png" },
  { style: aImage8, url: "/apng/mon_008.png" },
  { style: aImage9, url: "/apng/mon-004.png" },
  { style: aImage10, url: "/apng/mon_009.png" },
  { style: aImage11, url: "/apng/mon11_idle.png" },
  { style: aImage12, url: "/apng/mon-snake.png" },
];

const Block2 = () => {
  const renderMultipleAImage = (cnt: number, style: CSSProperties) => (
    <>
      {Array.from({ length: cnt }).map((_, idx) => (
        <ApngImage
          autoPlay
          key={idx.toString()}
          src="/apng/mon_007.png"
          style={style}
        />
      ))}
    </>
  );
  return (
    <div style={container}>
      <div style={body}>
        <img
          alt="block2"
          src={`${CDN_URL}/202303/block2-1_438x200.png`}
          style={image1}
        />
        <div style={box1}>
          <div style={box1Text1}>MEGA ROAD...</div>
          <div style={{ minHeight: 1 }} />
          <div style={box1Text2}>
            Every morning our trio is busy. Willie and Moby head out into the
            fierce monster-
            {"\n"} infested world to collect bolts to build more powerful
            weapons.
            <div style={{ height: 10 }} />
            Along the way, they must earn resources to build their moving
            fortress and reach
            {"\n"}the paradise of their dreams.
            <div style={{ height: 10 }} />
            Jeffrey works tirelessly to create new weapons and protective
            devices.
            <div style={{ height: 10 }} />
            Can Willie and his friends survive the monsters and find the
            paradise of their dreams?
            <div style={{ height: 10 }} />
            Join Willy, Moby, and Jeffrey on their dream adventure.
          </div>
        </div>
        <div
          style={{
            ...aImage1Box1,
            ...aImage1Horizontal,
          }}
        >
          {renderMultipleAImage(3, aImage1)}
        </div>
        <div
          style={{
            ...aImage1Box3,
            ...aImage1Vertical,
          }}
        >
          {renderMultipleAImage(5, aImage1)}
        </div>
        <div
          style={{
            ...aImage1Box2,
            ...aImage1Horizontal,
          }}
        >
          {renderMultipleAImage(3, aImage2)}
        </div>
        <div
          style={{
            ...aImage1Box4,
            ...aImage1Vertical,
          }}
        >
          {renderMultipleAImage(5, aImage2)}
        </div>
        <ImageList imageList={imageList} />
      </div>
    </div>
  );
};

export default Block2;
