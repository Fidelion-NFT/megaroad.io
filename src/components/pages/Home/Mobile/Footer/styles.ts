import { CSSProperties } from 'react';

import { getTextStyle } from 'styles/text';

export const container: CSSProperties = {
  alignItems: 'center',
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
};

export const image1: CSSProperties = {
  width: 203,
};

export const row: CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
};

export const text1: CSSProperties = {
  ...getTextStyle(11, 14, 400),
  verticalAlign: 'top',
};

export const divider1: CSSProperties = {
  backgroundColor: '#000',
  height: 8,
  margin: '0 8px',
  width: 1,
};
