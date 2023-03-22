import { CSSProperties } from 'react';

import { bodyWidth } from 'constants/values';
import { getTextStyle } from 'styles/text';

export const container: CSSProperties = {
  backgroundColor: '#8AE1FC',
  width: '100%',
};

export const body: CSSProperties = {
  backgroundColor: '#8AE1FC',
  height: 968,
  margin: 'auto',
  position: 'relative',
  width: bodyWidth,
};

export const image1: CSSProperties = {
  height: 222,
  left: 377,
  position: 'absolute',
  top: 82,
  width: 655,
};

export const image2: CSSProperties = {
  height: 104,
  left: 449,
  position: 'absolute',
  top: 308,
  width: 100,
};

export const image3: CSSProperties = {
  height: 105,
  left: 517,
  position: 'absolute',
  top: 444,
  width: 114,
};

export const image4: CSSProperties = {
  height: 68,
  left: 1006,
  position: 'absolute',
  top: 304,
  width: 70,
};

export const image5: CSSProperties = {
  height: 68,
  left: 725,
  position: 'absolute',
  top: 577,
  width: 231,
};

export const image6: CSSProperties = {
  height: 389,
  left: 49,
  position: 'absolute',
  top: 294,
  width: 382,
};

export const image7: CSSProperties = {
  height: 503,
  position: 'absolute',
  right: 92,
  top: 150,
  width: 392,
};

export const image8: CSSProperties = {
  height: 107,
  left: 659,
  position: 'absolute',
  top: 779,
  width: 132,
};

export const text1: CSSProperties = {
  ...getTextStyle(18, 22, 700),
  letterSpacing: -1,
  left: 561,
  position: 'absolute',
  top: 307,
  whiteSpace: 'pre-line',
  width: 428,
};

export const text2: CSSProperties = {
  ...getTextStyle(18, 22, 700),
  letterSpacing: -1,
  left: 639,
  position: 'absolute',
  top: 447,
  whiteSpace: 'pre-line',
  width: 375,
};

export const aImage1: CSSProperties = {
  height: 240,
  left: 49,
  position: 'absolute',
  top: 303,
  width: 195,
};

export const aImage2: CSSProperties = {
  height: 76,
  position: 'absolute',
  right: 110,
  top: 150,
  width: 102,
};
