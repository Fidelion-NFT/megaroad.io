import { CSSProperties } from 'react';

import { bodyWidth } from 'constants/values';
import { getTextStyle } from 'styles/text';

export const container: CSSProperties = {
  // backgroundColor: '#BE63FF',
  background: 'linear-gradient(90deg, #BE63FF 50%, #B4FF00 50%)',
  width: '100%',
};

export const body: CSSProperties = {
  height: 644,
  margin: 'auto',
  position: 'relative',
  width: bodyWidth,
};

export const image1: CSSProperties = {
  height: 658,
  left: 0,
  position: 'absolute',
  top: -8,
  width: 1440,
};

export const aImage1: CSSProperties = {
  height: 15,
  left: 296,
  position: 'absolute',
  top: 275-8,
  width: 32,
};

export const aImage2: CSSProperties = {
  cursor: 'pointer',
  height: 47,
  left: 1264,
  position: 'absolute',
  transform: 'rotate(-2deg)',
  top: 425-8,
  width: 50,
};

export const text1: CSSProperties = {
  ...getTextStyle(18, 22, 700),
  color: '#FFF',
  left: 606,
  position: 'absolute',
  top: 383,
  whiteSpace: 'pre-line',
};

export const text2: CSSProperties = {
  ...getTextStyle(18, 22, 700),
  color: '#EE220C',
  left: 1145,
  position: 'absolute',
  top: 125,
  transform: 'rotate(11deg)',
  whiteSpace: 'pre-line',
};

