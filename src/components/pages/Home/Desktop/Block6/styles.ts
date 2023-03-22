import { CSSProperties } from 'react';

import { bodyWidth } from 'constants/values';

export const container: CSSProperties = {
  backgroundColor: '#FB3B48',
  width: '100%',
};

export const body: CSSProperties = {
  backgroundColor: '#FB3B48',
  height: 580,
  margin: 'auto',
  position: 'relative',
  width: bodyWidth,
};

export const image1: CSSProperties = {
  height: 507,
  position: 'absolute',
  right: -1,
  top: 80,
  width: 774,
};

export const image2: CSSProperties = {
  height: 324,
  left: 273,
  position: 'absolute',
  top: 107,
  width: 420,
};
