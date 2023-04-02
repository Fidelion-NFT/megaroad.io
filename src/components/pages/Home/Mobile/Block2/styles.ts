import { CSSProperties } from 'react';

import { horizontalCenter } from 'styles/common';
import { getTextStyle } from 'styles/text';

export const container: CSSProperties = {
  backgroundColor: '#DBE000',
  width: '100%',
};

export const body: CSSProperties = {
  margin: 'auto',
  position: 'relative',
  width: 360,
};

export const image1: CSSProperties = {
  ...horizontalCenter,
  width: 319,
};

export const text1: CSSProperties = {
  ...getTextStyle(15, 19, 700),
  padding: '0 20px 0 34px',
  whiteSpace: 'pre-wrap',
};

export const animationLine1: CSSProperties = {
  display: 'flex',
  gap: 2,
  marginLeft: 36,
  flexDirection: 'row',
};

export const aImageMon007: CSSProperties = {
  width: 98,
};

export const aImageMon011: CSSProperties = {
  bottom: 115,
  left: 17,
  position: 'absolute',
  width: 114,
};

export const aImageBoss01: CSSProperties = {
  marginLeft: 99,
  width: 393,
};
