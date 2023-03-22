import { CSSProperties } from 'react';

import { bodyWidth } from 'constants/values';

export const container: CSSProperties = {
  backgroundColor: '#00E387',
  minWidth: '100%',
};

export const body: CSSProperties = {
  backgroundColor: '#00E387',
  height: 1064,
  margin: 'auto',
  position: 'relative',
  width: bodyWidth,
};

export const image1: CSSProperties = {
  height: 330,
  position: 'absolute',
  right: 642,
  top: 86,
  width: 441,
};
export const image2: CSSProperties = {
  height: 576,
  position: 'absolute',
  right: 115,
  top: 8,
  width: 491,
};

export const aImage1: CSSProperties = {
  cursor: 'pointer',
  height: 126,
  left: 193,
  position: 'absolute',
  top: 361,
  width: 172,
};

export const aImage2: CSSProperties = {
  cursor: 'pointer',
  height: 166,
  left: 608,
  position: 'absolute',
  top: 677,
  width: 202,
};
