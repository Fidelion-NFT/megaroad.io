import React, { useRef, useState } from "react";

import ApngImage from "components/atoms/ApngImage";
import { ApngPlayer } from "constants/types";
import { CDN_URL } from "constants/values";

import ImageList from "../ImageList";
import {
  aImage1,
  aImage2,
  body,
  container,
  image1,
  text1,
  text2,
} from "./styles";

const imageList = [
  { style: image1, url: `${CDN_URL}/202303/block8-3_1440x658.png` },
  { style: aImage1, url: `/apng/telescopic eye.png` },
];

const aImage2List = ["/apng/monitor_loop.png", "/apng/monitor_shutdown.png"];

const Block8 = () => {
  const ref1 = useRef<ApngPlayer>(null);
  const [aImage2Index, setAImage2Index] = useState(0);
  return (
    <div style={container}>
      <div style={body}>
        <ImageList imageList={imageList} />
        <ApngImage
          autoPlay
          onMouseEnter={() => {
            setAImage2Index(1);
            setTimeout(() => {
              ref1.current?.stopAtEnd();
            }, 200);
          }}
          onMouseLeave={() => {
            setAImage2Index(0);
          }}
          ref={ref1}
          src={aImage2List[aImage2Index]}
          style={aImage2}
        />
        <div style={text1}>
          Jeffrey is …{"\n"}
          an intelligent and eccentric{"\n"}
          scientist who has{"\n"}
          experienced tragedy.{"\n"}
          Despite being confined to a{"\n"}
          wheelchair due to an{"\n"}
          unfortunate accident, her{"\n"}
          creativity knows no bounds.
        </div>
        <div style={text2}>
          Jeffrey collects{"\n"}
          abandoned{"\n"}
          mechanical{"\n"}
          parts to create{"\n"}
          new weapons in{"\n"}
          her atomic{"\n"}
          bomb house.
        </div>
      </div>
    </div>
  );
};

export default Block8;
