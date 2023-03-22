import { CSSProperties } from 'react';

import { bodyWidth } from 'constants/values';
import { getTextStyle } from 'styles/text';

export const container: CSSProperties = {
  backgroundColor: '#01D6FE',
  width: '100%',
};

export const body: CSSProperties = {
  backgroundColor: '#01D6FE',
  height: 920,
  margin: 'auto',
  position: 'relative',
  width: bodyWidth,
};

export const image1: CSSProperties = {
  height: 207,
  left: 529,
  position: 'absolute',
  top: 44,
  width: 424,
};

export const image2: CSSProperties = {
  height: 362,
  left: 290,
  position: 'absolute',
  top: 262,
  width: 498,
};

export const text1: CSSProperties = {
  ...getTextStyle(20, 22, 700),
  color: '#000',
  left: 823,
  position: 'absolute',
  top: 330,
  whiteSpace: 'pre-line',
};
