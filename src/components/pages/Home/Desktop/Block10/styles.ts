import { CSSProperties } from 'react';

import { bodyWidth } from 'constants/values';

export const container: CSSProperties = {
  backgroundColor: '#FFDF00',
  width: '100%',
};

export const body: CSSProperties = {
  backgroundColor: '#FFDF00',
  height: 592,
  margin: 'auto',
  position: 'relative',
  width: bodyWidth,
};

export const image1: CSSProperties = {
  height: 560,
  position: 'absolute',
  right: 157,
  top: 57,
  width: 538,
};

export const image2: CSSProperties = {
  height: 324,
  left: 308,
  position: 'absolute',
  top: 135,
  width: 420,
};

export const image3: CSSProperties = {
  height: 118,
  left: 636,
  position: 'absolute',
  top: 436,
  width: 122,
};
