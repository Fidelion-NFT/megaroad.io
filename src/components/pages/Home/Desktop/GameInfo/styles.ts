import { CSSProperties } from "react";

import { bodyWidth } from "constants/values";
import { getTextStyle } from "styles/text";

export const container: CSSProperties = {
  background: 'linear-gradient(90deg, #56C0FF 50%, #FFFF3B 50%)',
  width: "100%",
};

export const body: CSSProperties = {
  background: 'linear-gradient(90deg, #56C0FF 50%, #FFFF3B 50%)',
  height: 849,
  margin: 'auto',
  position: 'relative',
  width: bodyWidth,
};
export const image1: CSSProperties = {
  position: 'absolute',
  left: 120,
  width: 629,
  height: 849,
};

export const image2: CSSProperties = {
  position: 'absolute',
  width: 629,
  height: 849,
  right: 62,
};
