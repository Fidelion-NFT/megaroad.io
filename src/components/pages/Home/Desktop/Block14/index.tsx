import React from "react";

import { CDN_URL } from "constants/values";

import ImageList from "../ImageList";
import { body, container, image1, image2, text1 } from "./styles";
import DirectedBy from "../DirectedBy";

const imageList = [
  { style: image1, url: `${CDN_URL}/202303/block14-1_424x207.png` },
  { style: image2, url: `${CDN_URL}/202303/block14-2_498x362.png` },
];

const Block14 = () => (
  <div style={container}>
    <div style={body}>
      <ImageList imageList={imageList} />
      <DirectedBy
        h1={17}
        h2={42}
        gap={2}
        style={{
          left: 824,
          position: "absolute",
          top: 273,
        }}
      />
      <div style={text1}>
        Development{"\n"} Story writer Hokyo Lim{"\n"}
        Creative, Game Director Hokyo Lim{"\n"}
        Producer Rizel Lee{"\n"}
        Art Director Hokyo Lim{"\n"}
        Engineer Hoongkey and Carroll{"\n"}
        Sound Director Hokyo Lim{"\n"}
        Artist Hokyo Lim, Jason Ju hoon Lee{"\n"}
        FX, Animator Eastone Jang{"\n"}
        UI Artist Seok GeunDeok, Rimma Deli{"\n"}
        {"\n"}
        Production{"\n"}
        Prod. VP Ryot Seo{"\n"}
        Prod. Manager Haley{"\n"}
        Operation Lead, Staff Bella Youn, Sun{"\n"}
        Marketing Lead Mason{"\n"}
        Marketing Designer MJ Seo{"\n"}
        Talent Acquisition, QA Wade Yang, Luke{"\n"}
        Sound Designer daf{"\n"}
        QA All of Tidal Flats family {"\n"}
      </div>
    </div>
  </div>
);

export default Block14;
