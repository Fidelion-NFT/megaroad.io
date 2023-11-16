import React from "react";

import ImageList from "components/pages/Home/Desktop/ImageList";
import { CDN_URL_M } from "constants/values";

import { aImage1, body, container, image1 } from "./styles";

const imageList = [
  { style: image1, url: `${CDN_URL_M}/m-block4-image1_306x833.png` },
];

const Block4 = () => (
  <div style={container}>
    <div style={body}>
      <div style={{ minHeight: 40 }} />
      <ImageList imageList={imageList} />
      <div style={{ minHeight: 135 }} />
      <img alt="meat" src="/apng/eat_meat.png" style={aImage1} />
      <div style={{ minHeight: 135 }} />
    </div>
  </div>
);

export default Block4;
