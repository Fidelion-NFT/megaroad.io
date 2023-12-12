import { CSSProperties } from 'react';

export const container: CSSProperties = {
  alignItems: 'center',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '0 20px',
};

export const image1: CSSProperties = {
  width: 66,
  height: 46.75,
  position: 'fixed',
  left: 18,
  top: 20,
};

export const image2: CSSProperties = {
  height: 25,
  width: 28,
};

export const fixedLeft1: CSSProperties = {
  cursor: 'pointer',
  position: 'fixed',
  left: 18,
  top: 80,
  width: 66,
  height: 123,
  zIndex: 9999,
};
