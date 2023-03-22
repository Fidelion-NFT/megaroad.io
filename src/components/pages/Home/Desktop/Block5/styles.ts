import { CSSProperties } from 'react';

import { bodyWidth } from 'constants/values';

export const container: CSSProperties = {
  backgroundColor: '#ABECE4',
  width: '100%',
};

export const body: CSSProperties = {
  backgroundColor: '#ABECE4',
  height: 583,
  margin: 'auto',
  position: 'relative',
  width: bodyWidth,
};

export const image1: CSSProperties = {
  height: 590,
  left: 199,
  position: 'absolute',
  top: -30,
  width: 643,
};

export const image2: CSSProperties = {
  height: 324,
  position: 'absolute',
  right: 175,
  top: 119,
  width: 420,
};
