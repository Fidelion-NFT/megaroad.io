import React from "react";

import ImageList from "components/pages/Home/Desktop/ImageList";
import { CDN_URL_M } from "constants/values";

import { aImage1, body, container, image1, imageFull } from "./styles";

const imageList = [
  { style: imageFull, url: `${CDN_URL_M}/6-2.png` },
  { style: image1, url: `${CDN_URL_M}/m-block6-image1_392x503.png` },
  { style: aImage1, url: "/apng/birdeye.png" },
];

const Block6 = () => (
  <div style={container}>
    <div style={body}>
      <ImageList imageList={imageList} />
    </div>
  </div>
);

export default Block6;
