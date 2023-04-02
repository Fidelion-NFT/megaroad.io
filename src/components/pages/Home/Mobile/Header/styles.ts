import { CSSProperties } from 'react';

export const container: CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  height: 60,
  justifyContent: 'space-between',
  padding: '0 20px',
};

export const image1: CSSProperties = {
  height: 34,
  width: 48,
};

export const image2: CSSProperties = {
  height: 25,
  width: 28,
};

export const fixedLeft1: CSSProperties = {
  cursor: 'pointer',
  height: 123,
  left: 18,
  position: 'fixed',
  top: 80,
  width: 66,
  zIndex: 9999,
};
