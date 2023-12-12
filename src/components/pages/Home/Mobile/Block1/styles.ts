import { CSSProperties } from 'react';

import { horizontalCenter } from 'styles/common';

export const container: CSSProperties = {
  backgroundColor: '#00E387',
  width: '100%',
};

export const body: CSSProperties = {
  margin: 'auto',
  width: 360,
};

export const image1: CSSProperties = {
  ...horizontalCenter,
  width: 312,
};

export const image2: CSSProperties = {
  ...horizontalCenter,
  width: 303,
};

export const aImage1: CSSProperties = {
  ...horizontalCenter,
  width: 146,
};
