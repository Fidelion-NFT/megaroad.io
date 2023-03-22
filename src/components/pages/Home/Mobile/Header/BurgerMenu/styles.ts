import { CSSProperties } from 'react';

import { getTextStyle } from 'styles/text';

export const titleText: CSSProperties = {
  ...getTextStyle(24, 30, 700),
  color: '#000',
};

export const menuText: CSSProperties = {
  ...getTextStyle(18, 20, 700),
  color: '#000',
  cursor: 'pointer',
  paddingLeft: 13,
  marginBottom: 28,
};
