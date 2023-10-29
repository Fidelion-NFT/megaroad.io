import { CSSProperties } from "react";

import { bodyWidth } from "constants/values";
import { getTextStyle } from "styles/text";

export const container: CSSProperties = {
  backgroundColor: "#E9B200",
  width: "100%",
};

export const body: CSSProperties = {
  backgroundColor: "#E9B200",
  height: 1063,
  margin: "auto",
  position: "relative",
  width: bodyWidth,
};

export const image1: CSSProperties = {
  height: 698,
  left: 219,
  position: "absolute",
  top: 65,
  width: 1007,
};

export const image2: CSSProperties = {
  height: 107,
  left: 903,
  position: "absolute",
  top: 571,
  width: 132,
};

export const image3: CSSProperties = {
  height: 55,
  left: 1043,
  position: "absolute",
  top: 626,
  width: 65,
};

export const box1: CSSProperties = {
  left: 350,
  position: "absolute",
  top: 314,
  width: 765,
};

export const box1Text1: CSSProperties = {
  ...getTextStyle(18, 25, 700),
  color: "#000",
  width: 765,
};

export const box1Text2: CSSProperties = {
  ...getTextStyle(34, 25, 700),
};

export const aImage1: CSSProperties = {
  cursor: "pointer",
  height: 50,
  left: 674,
  position: "absolute",
  top: 878,
  width: 81,
};
