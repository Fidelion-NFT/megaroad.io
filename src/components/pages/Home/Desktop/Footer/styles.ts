import { CSSProperties } from 'react';

import { getTextStyle } from 'styles/text';

export const container: CSSProperties = {
  alignItems: 'center',
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  padding: '0 48px',
};

export const image1: CSSProperties = {
  height: 96,
  width: 366,
};

export const bottomLine: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
};

export const bottomLineBox1: CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
};

export const bottomLineBox1Text1: CSSProperties = {
  ...getTextStyle(14, 14, 400),
  color: '#000',
};

export const divider1: CSSProperties = {
  backgroundColor: '#000',
  height: 10,
  margin: '0 8px',
  width: 1,
};

export const bottomLineBox2: CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
};

export const snsIcon: CSSProperties = {
  cursor: 'pointer',
  height: 40,
  width: 40,
}
