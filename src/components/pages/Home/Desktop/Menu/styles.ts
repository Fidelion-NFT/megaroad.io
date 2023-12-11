import { CSSProperties } from 'react';

import { bodyWidth } from 'constants/values';
import { getTextStyle } from 'styles/text';

export const container: CSSProperties = {
  backgroundColor: 'transparent',
  left: 0,
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 1000,
};

export const body: CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  height: 140,
  margin: 'auto',
  paddingLeft: 65,
  paddingRight: 15,
  position: 'relative',
  width: bodyWidth,
};

export const megaLoad: CSSProperties = {
  cursor: 'pointer',
  position: 'absolute',
  height: 98,
  width: 116,
  top: -130,
};

export const menuText: CSSProperties = {
  ...getTextStyle(16, 18, 700),
  cursor: 'pointer',
  textAlign: 'center',
  whiteSpace: 'pre-line',
};
